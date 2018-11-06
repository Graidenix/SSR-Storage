import { Inject, PLATFORM_ID } from '@angular/core';

export class StorageService {
    constructor(@Inject(PLATFORM_ID) private platform) {

    }
}