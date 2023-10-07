import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { IBook } from "../entities/book.entity";
import { useEffect, useState } from "react";
import { getAllBook } from "../services/book.services";

const columns: ColumnsType<IBook> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Code",
    dataIndex: "code",
    key: "code",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Author",
    dataIndex: "author",
    key: "author",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
];

const BookList: React.FC = () => {
  const [data, setData] = useState<IBook[]>();
  useEffect(() => {
    getAllBook().then((book) => setData(book));
  }, [])
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        showTotal(total, range) {
          return `${range[0]}-${range[1]} of ${total} items`;
        },
      }}
    />
  );
};

export default BookList;
