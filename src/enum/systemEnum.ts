import {Enum} from "@/utils/Enum";

export const StatusEnum = {
    正常: new Enum(0, "正常"),
    停用: new Enum(1, "停用")
}

/**
 * 是否删除
 */
export const DeletedEnum = {
    未删除: new Enum(0, "未删除"),
    已删除: new Enum(1, "已删除"),
}

/**
 * 角色状态（0正常 1停用）
 */
export const roleStatus = {
    /**
     * 正常
     */
    normal: new Enum(0, "正常"),
    /**
     * 停用
     */
    stop: new Enum(1, "停用")
}

/**
 * 角色类型（0 内部角色 1外部角色）
 */
export const RoleTypeEnum = {
    inside: new Enum(0, "内部用户"),
    outside: new Enum(1, "外部客户")
}

/**
 * 菜单类型 (0目录 1页面)
 */
export const MenuTypeEnum = {
    目录: new Enum(0, "目录"),
    页面: new Enum(1, "页面")
}





