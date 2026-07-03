export interface ITitle {
    id: number,
    name: string
}

export const Title = (tittle?: Partial<ITitle>): ITitle => {
  return {
    id: 0,
    name: "",
    ...tittle,    
  };
};