type keys = "token" | "userinfo";

/**
 * 本地缓存工具类/
 */
export class Cache {

    static setItem(keys: keys, data: any): void {
        const stringify = JSON.stringify(data);
        localStorage.setItem(keys, stringify)
    }

    static getItem<T>(keys: keys): T | null {
        let t: T;
        if (localStorage.getItem(keys) != null) {
            t = JSON.parse(localStorage.getItem(keys) as string);
            return t
        } else {
            return null;
        }
    }

    static removeItem(key: keys): void {
        localStorage.removeItem(key);
    }

    static clear(): void {
        localStorage.clear()
    }
}

