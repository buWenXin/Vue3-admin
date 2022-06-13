type keys = "token" | "userinfo"|"auth";

/**
 * 本地缓存工具类/
 */
export class MyCache {

    static setItem(keys: keys, data: any): void {
        const stringify = JSON.stringify(data);
        localStorage.setItem(keys, stringify)
    }

    static getItem<T>(keys: keys): T | null {
        let t: T;
        const item = localStorage.getItem(keys);
        if(item!=null){
            t = JSON.parse(item);
            return  t;
        }else {
            return  null;
        }
    }

    static removeItem(key: keys): void {
        localStorage.removeItem(key);
    }

    static clear(): void {
        localStorage.clear()
    }
}

