type keys = "token" | "userinfo" | "auth"|"powerKeys";

/**
 * 本地缓存工具类/
 */
export class MyCache {

    static setItem(keys: keys, data: any): void {
        localStorage.setItem(keys, JSON.stringify(data))
    }

    static getItem<T>(keys: keys): T | null {
        const item = localStorage.getItem(keys);
        if (item != null) {
            return JSON.parse(item);
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

