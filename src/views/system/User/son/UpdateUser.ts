import {reactive, ref} from "vue";
import {ObjectUtils} from "@/utils/ObjectUtils";
import type {FormRules} from "element-plus/es";
import type {UserSaveDto} from "@/model/systemModel/userModel";

const visible = ref(false);
const title = ref("新增");

const userSaveDto: UserSaveDto = reactive({
    avatar: "",
    id: 0,
    nickName: "",
    password: "",
    userName: "",
    userType: 0
})
const initialData = ObjectUtils.deepCopy(userSaveDto);
//表单验证
const rules = reactive<FormRules>({
    userName: [
        {required: true, message: '请输入账号', trigger: 'blur'},
    ],
    password: [
        {required: true, message: '请输入密码', trigger: 'blur'},
    ]
})



export function useUserUpdate() {
    return {
        title,
        visible,
        rules,
        userSaveDto
    }
}

//暴露的打开事件
function open(row?: any) {
    ObjectUtils.DtoTo(initialData, userSaveDto);
    if (row) {
        title.value = "修改"
        ObjectUtils.DtoTo(row, userSaveDto)
    } else {
        //恢复默认值
        title.value = "新增"
    }
    visible.value = true;
}

export function useUserOpen() {
    return {
        open
    }
}
