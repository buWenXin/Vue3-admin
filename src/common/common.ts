import {ObjectUtils} from "@/utils/ObjectUtils";


/**
 *重置数据,只能是reactive的数据
 */
export function useResetData<T extends object>(data: T) {
   const deepCopy = ObjectUtils.deepCopy(data);

   return () => {
      ObjectUtils.DtoTo(deepCopy, data)
   };
}
