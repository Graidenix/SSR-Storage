import { StorageInterface } from './interface';

export class SessionStorage implements StorageInterface {

    private _session: {
        destroy: () => void;
        [props: string]: any;
    };

    set storage(session) {
        this._session = session;
    }

    public clear() {
        this._session.destroy();
    }

    public getItem(key: string): string {
        return this._session[key];
    }

    public removeItem(key: string) {
        delete this._session[key];
    }

    public setItem(key: string, value: string) {
        this._session[key] = value;
    }

}