import { ITransaction } from "./transaction.entity";

export interface IMember {
  id: number;
  code: string;
  name: string;
  transactions: ITransaction[];
}
