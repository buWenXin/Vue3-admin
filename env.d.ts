/// <reference types="vite/client" />

/**
 * 环境变量类型
 */
interface ImportMetaEnv {
    readonly VITE_TITLE: string,
    readonly VITE_API_PATH: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
