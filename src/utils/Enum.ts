export class Enum {
    readonly value: number;
    readonly desc: string

    constructor(value: number, desc: string) {
        this.value = value;
        this.desc = desc;
    }
}

interface BaseEnum {
    [propName: string]: Enum;
}

/**
 * 枚举工具类
 */
export class EnumUtils {
    static getEnumDesc<T extends BaseEnum>(emun: T, value: number): string | undefined {
        for (let key in emun) {
            if (emun[key].value == value) {
                return emun[key].desc;
            }
        }
    }
}


