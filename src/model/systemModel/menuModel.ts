export interface MenuInfoVo {
   id: number,
   name: string,
   type: number,
   parentId: number,
   sortInt: number,
   routerPath: string,
   componentPath: string,
   status: string,
   perms: string,
   icon: string,
   statusName: string,
   children: Array<MenuInfoVo>,
   // changeList?: number[]
}

export interface MenuUpdateDto {
   /**
    * 组件路径
    */
   componentPath: string,
   /**
    * 菜单图标
    */
   icon: string,
   /**
    * id
    */
   id: number,
   /**
    * 菜单名
    */
   name: string,
   /**
    * 所属目录id
    */
   parentId: number,
   /**
    * 排序
    */
   sortInt: number,
   /**
    * 权限标识
    */
   perms: string,
   /**
    * 路由地址
    */
   routerPath: string,
   /**
    * 菜单状态（0正常 1停用）
    */
   status: number,
   /**
    * 是否是目录 （0目录 1页面）
    */
   type: number,
}

/**
 * 菜单目录结构
 */
export interface MenuOfDto {
   /**
    * id
    */
   id: number,
   /**
    * 菜单名
    */
   name: string,
   children: Array<MenuOfDto>,
}
