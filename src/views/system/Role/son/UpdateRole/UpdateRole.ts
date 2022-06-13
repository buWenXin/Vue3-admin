import {reactive, ref} from "vue";

import {RoleUpdateDto} from "~/api/system/model/RoleModel";
import {FormRules} from "element-plus/es";
import {ObjectUtils} from "~/utils/ObjectUtils";

const visible = ref(false);
const title = ref("新增");

const roleUpdateDto: RoleUpdateDto = reactive({
    id: 0,
    name: "",
    roleKey: "",
    status: 0,
    type: 0
});

//form表单验证:
const rules = reactive<FormRules>({
    name: [
        {required: true, message: '请输入角色名称', trigger: 'blur'},
    ],
    roleKey: [
        {required: true, message: '请输入角色权限名称', trigger: 'blur'},
    ]
})
//初始化的值
const initialData = ObjectUtils.deepCopy(roleUpdateDto);
const open = (row?: any) => {
    if (row) {
        title.value = "编辑"
        ObjectUtils.DtoTo(row, roleUpdateDto);
    } else {
        title.value = "新增";
        ObjectUtils.DtoTo(initialData, roleUpdateDto)
    }
    visible.value = true;
};

//提交的form数据
export function useRoleForm() {
    return {
        rules,
        roleUpdateDto,
        visible,
        title,
    }
}
//暴露打开事件
export function useRoleOpen() {
    return {
        open
    }
}
