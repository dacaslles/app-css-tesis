import { STORAGE_NAME } from '../../configs/app.config';
import GameData from '../types/storage.interface';

export class GameStorage {

    // public saveOnlyParameter(item: string, param: string): void{
    //     sessionStorage.setItem(item, param);
    // }

    public static saveGameData(object: GameData): void{
        sessionStorage.setItem(STORAGE_NAME, btoa(JSON.stringify(object)));
    }

    // public getOnlyParameter(item: string): string | null{
    //     return sessionStorage.getItem(item);
    // }

    public static getGameData(): GameData | undefined{
        const info = sessionStorage.getItem(STORAGE_NAME);
        if (info) {
            return JSON.parse(atob(info));
        }
        else {
            return undefined;
        }
    }

    public static clear(): void{
        sessionStorage.removeItem(STORAGE_NAME);
    }

}
