export interface StorageInterface {
    storage?: any;
    getItem(key: string): string;
    setItem(key: string, value: string): any;
    removeItem(key: string): any;
    clear(): any;
}
