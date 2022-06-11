/**
 * 对象工具类
 */
export class ObjectUtils {

    // 判断是否为数组
    static isArr(origin: any): boolean {
        let str = '[object Array]'
        return Object.prototype.toString.call(origin) == str
    }

    /**
     * 深度拷贝
     * @param source 数据源对象
     * @return copy  拷贝对象
     */
    static deepCopy<T extends object>(source: T): T {
        let copy: [] | {} = ObjectUtils.isArr(source) ? [] : {};
        for (let [key, val] of Object.entries(source)) {
            if (typeof val == "object") {
                const deepCopy = ObjectUtils.deepCopy(val);
                Reflect.set(copy, key, deepCopy);
            } else {
                Reflect.set(copy, key, val);
            }
        }
        return copy as T;
    }

    /**
     * 同属性赋值
     * 只有属性名称相同才进行赋值操作.
     * @param source 数据源对象
     * @param target 目标对象
     */
    static DtoTo<T extends object, U extends object>(source: T, target: U): U {
        for (let [targetKey, targetVal] of Object.entries(target)) {
            for (let [sourceKey, sourceVal] of Object.entries(source)) {
                if (targetKey == sourceKey) {
                    if (typeof targetVal == "object" && targetVal != null) {
                        if (ObjectUtils.isArr(targetVal)) {
                            Reflect.set(target, targetKey, ObjectUtils.deepCopy(sourceVal));
                        } else {
                            Reflect.set(target, targetKey, ObjectUtils.DtoTo(sourceVal, targetVal));
                        }
                    } else {
                        Reflect.set(target, targetKey, sourceVal)
                    }
                }
            }
        }
        return target;
    }
}







