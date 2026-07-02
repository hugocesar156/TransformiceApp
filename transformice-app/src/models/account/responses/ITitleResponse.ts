export interface ITitleResponse {
    id: number,
    name: string
}

export const TitleResponse = (tittle?: Partial<ITitleResponse>): ITitleResponse => {
  return {
    id: 0,
    name: "",
    ...tittle,    
  };
};