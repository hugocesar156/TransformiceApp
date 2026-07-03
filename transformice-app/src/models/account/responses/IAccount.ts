import { ITitle } from "./ITitle";

export interface IAccount {
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
    titles: ITitle[]
}

export const AccountResponse = (account?: Partial<IAccount>): IAccount => {
  return {
    id: 0,
    name: "",
    gender: "",
    inscriptionDate: new Date(),
    level: 0,
    experience: 0,
    experienceNeeded: 0,
    actualTitle: "",
    normalModeSaves: 0,
    hardModeSaves: 0,
    divineModeSaves: 0,
    cheeseShaman: 0,
    firstCheese: 0,
    cheese: 0,
    bootcamp: 0,
    titles: [],
    ...account,    
  };
};