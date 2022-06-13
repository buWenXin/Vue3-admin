import {reactive} from "vue";

//代码格式插件


import type {childrens, tagsDto} from "@/model/developerToolModel/ApisModel";
import {getApis} from "@/api/developerTool/developerToolApi";
import {js_beautify} from 'js-beautify';

export function userApiData() {
    let tags: Array<tagsDto> = [];
    const reactive1: Array<tagsDto> = reactive(tags);
    getApis().then(res => {
        console.log(res);
        let definitions = res.data.definitions;
        //处理请求/响应对象
        let definitionsData: any = {}
        for (let definitionsKey in definitions) {
            const modelObj = getModelObj(definitions, definitionsKey);
            definitionsData[definitionsKey] = modelObj.data;
        }
        console.log(definitionsData);
        //获取分类
        res.data.tags.forEach((item: any) => {
            reactive1.push({
                children: [],
                model: {},
                name: item.name
            })
        })

        //遍历所有的api接口
        for (let pathsKey in res.data.paths) {
            let item: any = res.data.paths[pathsKey];
            let chs: childrens = {
                method: "", requestDto: undefined, responseVo: undefined, title: "", url: "", responseVoString: "", requestDtoString: ""
            }
            chs.url = pathsKey;//获取接口url
            for (let itemKey in item) {
                chs.title = item[itemKey].summary;//接口标题
                chs.method = itemKey;//接口请求方法


                //获取请求参数----------------------------------------------
                if (item[itemKey].parameters) {
                    let sr: any = {};
                    let typeStr = ""//拼接的参数字符串

                    //遍历请求参数,获取请求参数.
                    item[itemKey].parameters.forEach((pathItem: any) => {
                        //判断参数类型,如果是query参数,则组合参数类型
                        if (pathItem.in == "query") {
                            let name = pathItem.name;
                            typeStr += `
                            /**
                             * ${pathItem.description}
                             */
                            ${name}:${pathItem.type},
                            `
                            sr[name] = {
                                description: pathItem.description,
                                type: pathItem.type
                            }
                        } else if (pathItem.in == "body") {
                            //如果是请求头参数,则需要从definitions里面获取请求体参数;
                            if (pathItem.schema) {
                                let name = pathItem.schema.originalRef;
                                const modelObj1 = getModelObj(definitions, name);
                                sr = modelObj1.data;
                                typeStr = modelObj1.str;
                            }
                        }
                    })
                    chs.requestDto = sr;//接口请求参数
                    chs.requestDtoString = js_beautify(`interface Interface {${typeStr}}`);
                }


                //获取响应参数-----------------------------------------
                let responses = item[itemKey].responses
                for (let responsesKey in responses) {
                    //获取200成功返回的数据对象.
                    if (responsesKey == "200") {
                        //判断是否有返回值
                        let schema: any = responses[responsesKey].schema;
                        if (schema) {
                            //在model对象中遍历比对;
                            //需要进行递归处理
                            chs.responseVo = schema.originalRef;
                        }
                    }
                }
                //组合
                reactive1.forEach(it => {
                    if (it.name == item[itemKey].tags[0]) {
                        it.children.push(chs);
                    }
                })
            }
        }

        reactive1.forEach(item => {
            item.children.forEach(item => {
                if (item.responseVo) {
                    const modelObj = getModelObj(definitions, item.responseVo);
                    item.responseVo = modelObj.data;
                    //js_beautify格式化内容
                    item.responseVoString = js_beautify(`interface Interface {${modelObj.str}}`);
                }
            })
        })
    })
    return reactive1;
}


//处理属性;
function getProperties(properties: any, definitions: any, name: any) {
    let data: any = {};//响应/请求对象
    let str: string = ``; //进行处理后的代码
    for (let propertiesKey in properties) {
        let sonName = properties[propertiesKey].originalRef
        //如果属性有model类型
        if (sonName) {
            //进入递归
            const modelObj = getModelObj(definitions, sonName);
            data[propertiesKey] = modelObj.data;

            str += `${propertiesKey}:{${modelObj.str}},`
        } else {
            //没有model类型,普通属性,判断类型是否是数组
            if (properties[propertiesKey].type == "array") {
                let modelName = properties[propertiesKey].items.originalRef;
                if (modelName) {
                    //判断是否是相同的属性,如果是则不进行递归
                    if (name == modelName) {
                        data[propertiesKey] = {
                            type: `${propertiesKey}: Array<${modelName}>`
                        };
                        str += `${propertiesKey}: Array<${modelName}>,`
                    } else {
                        const modelObj = getModelObj(definitions, modelName);
                        data[propertiesKey] = modelObj.data;
                        str += `${propertiesKey}:{${modelObj.str}}`
                    }
                }
            } else {
                //都不是,就是普通属性的
                data[propertiesKey] = properties[propertiesKey]
                //如果有描述则添加注释
                if (properties[propertiesKey].description) {
                    str += `
                      /**
                       * ${properties[propertiesKey].description}
                      */
                    `
                }
                //评价属性名称和类型
                str += `${propertiesKey}: ${getJavaToTS(properties[propertiesKey].type)},`
            }
        }
    }
    return {
        data,
        str
    };
}

//递归遍历,获取响应对象.
function getModelObj(obj: any, name: any): any {
    for (let objKey in obj) {
        //如果名称相同,则进入判断
        if (objKey == name) {
            //获取所有属性
            let properties = obj[objKey].properties;
            //遍历所有属性,进程处理
            return getProperties(properties, obj, name)
        }
    }
}

/**
 * java类型转换ts类型
 */
function getJavaToTS(type: string): string {
    let numbers: Array<string> = ["integer", "int", "BigDecimal"];
    let strings: Array<string> = ["string", "Date", "DateTime",];
    let booleans: Array<string> = ["boolean"];

    if (strings.includes(type)) {
        return "string";
    } else if (numbers.includes(type)) {
        return "number"
    } else if (booleans.includes(type)) {
        return "boolean"
    } else {
        return `无法转换的类型${type}`
    }
}




