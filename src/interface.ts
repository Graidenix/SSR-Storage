export interface StorageInterface {
    storage?: any;

    getItem(key: string): string;

    setItem(key: string, value: string);

    removeItem(key: string);

    clear();
}