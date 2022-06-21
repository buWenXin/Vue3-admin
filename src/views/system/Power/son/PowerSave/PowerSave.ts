import {PowerPageVo, PowerSaveDto} from "@/model/systemModel/PowerModel";
import {reactive, ref} from "vue";
import {useResetData} from "@/common/common";
import {FormRules} from "element-plus/es";
import {ObjectUtils} from "@/utils/ObjectUtils";

export function usePowerFormDto() {
   //from表单数据
   const powerSaveDto: PowerSaveDto = reactive({
      id: 0, menuId: 0, powerDesc: "", powerKey: "", remake: "", menuName: ""
   });

   //form表单验证:
   const rules = reactive<FormRules>({
      menuId: [
         {required: true, message: '请选择页面', trigger: 'change'},
      ],
      powerDesc: [
         {required: true, message: '请输入权限描述', trigger: 'blur'},
      ],
      powerKey: [
         {required: true, message: '请输入权限值', trigger: 'blur'},
      ],
   })

   const resetData = useResetData(powerSaveDto);


   return {
      powerSaveDto,
      resetData,
      rules
   }
}
