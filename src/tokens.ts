import { InjectionToken } from '@angular/core';
import { StorageInterface } from './interface';

export const STORAGE = new InjectionToken<StorageInterface>('STORAGE');