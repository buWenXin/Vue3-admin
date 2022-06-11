import {ElMessage} from 'element-plus'
import {useClipboard} from '@vueuse/core'

const {text, copy, copied, isSupported} = useClipboard()

export function copyText(text: string) {
    copy(text).then(() => {
        ElMessage.success("复制成功");
    })
}


