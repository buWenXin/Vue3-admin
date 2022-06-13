import {reactive} from "vue";
import {ObjectUtils} from "@/utils/ObjectUtils";
import type {BasePageDto, BasePageVo} from "@/model/baseModel";
import type {ResponseData, ResponsePageData} from "@/utils/request";
import {useTableData} from "@/common/TabelData";


/**
 *
 * @param data 分页请求对象,
 * @param getApi 获取分页数据函数
 * Promise<ResponseData<T>>
 */
export function usePage<D extends BasePageDto, V extends BasePageVo>(data: D, getApi: (data: any) => Promise<ResponseData<ResponsePageData<V>>>) {

    /**
     * 深度拷贝的请求对象,用户初始化
     */
    /**
     * 分页请求对象
     */
    const pageDto = reactive(data);
    const copy = ObjectUtils.deepCopy(pageDto);

    /**
     * 分页响应对象
     */
    const tableData = useTableData<V>();

    /**
     * 获取分页数据
     */
    function getData() {
        tableData.loading = true;
        getApi(pageDto).then(res => {
            tableData.total = res.data.total;
            tableData.tableList = res.data.records;
        }).finally(() => {
            tableData.loading = false;
        })
    }

    /**
     * 触发搜索事件
     */
    function handleSearch() {
        pageDto.pageIndex = 1;
        getData();
    }

    //分页查询对象重置
    function handleRefresh() {
        ObjectUtils.DtoTo(copy, pageDto);
        getData();
        console.log(pageDto);
    }

    return {
        getData,
        pageDto,
        tableData,
        handleSearch,
        handleRefresh
    }
}






