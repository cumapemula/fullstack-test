export interface ITransaction {
  id: number;
  member_id: number;
  book_id: number;
  borrowing_date: Date | string;
  return_date: Date | string;
  returned: boolean | string;
}
