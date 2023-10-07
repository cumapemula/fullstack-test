import { useEffect, useState } from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { IMember } from "../entities/member.entity";
import { getAllMember } from "../services/member.services";

const columns: ColumnsType<IMember> = [
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
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
];

const MemberList: React.FC = () => {
  const [data, setData] = useState<IMember[]>();
  useEffect(() => {
    getAllMember().then((member) => setData(member));
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

export default MemberList;
