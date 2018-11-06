import { StorageInterface } from './interface';
export declare class LocalStorage implements StorageInterface {
    clear(): void;
    getItem(key: string): string;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
}
