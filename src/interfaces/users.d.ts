// interfaces
interface IAddress {
  street: string;
  city: string;
}

export interface IUser {
  id: number;
  name: string;
  address: IAddress;
}
