import { StorageInterface } from './interface';
export declare class SessionStorage implements StorageInterface {
    private _session;
    storage: any;
    clear(): void;
    getItem(key: string): string;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}
