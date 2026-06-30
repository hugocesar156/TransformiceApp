import { ITitleResponse } from "./ITitleResponse";

export interface IAccountResponse {
    id: number,
    name: string,
    gender: string,
    inscriptionDate: Date,
    level: number,
    experience: number,
    experienceNeeded: number,
    actualTitle: string,
    normalModeSaves: number,
    hardModeSaves: number,
    divineModeSaves: number,
    cheeseShaman: number,
    firstCheese: number,
    cheese: number,
    bootcamp: number,
    titles: ITitleResponse[]
}