import {reactive} from "vue";
import type {BasePageVo} from "@/model/baseModel";

export interface TableData<T> {
    tableList: Array<T>,
    total: number,
    loading: boolean
}

export function useTableData<T extends BasePageVo>() {
    const reactive1: TableData<T> = reactive({
        tableList: [],
        total: 0,
        loading: false
    });
    return reactive1;
}


