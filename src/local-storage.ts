import { StorageInterface } from './interface';

export class LocalStorage implements StorageInterface {
    public clear() {
        localStorage.clear();
    }

    public getItem(key: string): string {
        return localStorage.getItem(key);
    }

    public removeItem(key: string) {
        return localStorage.removeItem(key);
    }

    public setItem(key: string, value: string) {
        return localStorage.setItem(key, value);
    }

}