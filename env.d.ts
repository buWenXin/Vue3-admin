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
//解决组件类型报错
declare module "*.vue" {
   import { DefineComponent } from "vue";
   // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
   const component: DefineComponent<{}, {}, any>;
   export default component;
}
