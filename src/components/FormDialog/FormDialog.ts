import {ref} from "vue";

import type FormDialog from "./FormDialog.vue"

export function useFormDialog() {
    const formDialog = ref<InstanceType<typeof FormDialog> | null>(null);

    function open() {
        formDialog.value.open()
    }

    function close() {
        formDialog.value.close();
    }

    return {
        formDialog,
        open,
        close
    }
}

