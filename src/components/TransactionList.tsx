import { useEffect, useState } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { ITransaction } from "../entities/transaction.entity";
import { getAllTransaction } from "../services/transaction.services";

const columns: ColumnsType<ITransaction> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Member ID",
    dataIndex: "member_id",
    key: "member_id",
  },
  {
    title: "Book ID",
    dataIndex: "book_id",
    key: "book_id",
  },
  {
    title: "Borrowing Date",
    dataIndex: "borrowing_date",
    key: "borrowing_date",
  },
  {
    title: "Return Date",
    dataIndex: "return_date",
    key: "return_date",
  },
  {
    title: "Returned",
    dataIndex: "returned",
    key: "returned",
  },
];

const TransactionList: React.FC = () => {
  const [data, setData] = useState<ITransaction[]>();
  useEffect(() => {
    getAllTransaction().then((transaction) => setData(transaction));
  }, [])
  return (
    <Table
      columns={columns}
      dataSource={data?.map(transaction => {
        const date = new Date(transaction.borrowing_date);
        return {
          id: transaction.id,
          member_id: transaction.member_id,
          book_id: transaction.book_id,
          borrowing_date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
          return_date:
            transaction.return_date === null ? "-" : transaction.return_date,
          returned: transaction.returned === false ? "False" : "True",
        };
      })}
      pagination={{
        showTotal(total, range) {
          return `${range[0]}-${range[1]} of ${total} items`;
        },
      }}
    />
  );
};

export default TransactionList;
