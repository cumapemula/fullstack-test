import React from "react";
import { Button, Form, Input, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { fetchReturn } from "../services/transaction.services";

type FieldType = {
  member_id: number;
  book_id: number;
};

const ReturnForm: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    const data = {
      member_id: Number(values.member_id),
      book_id: Number(values.book_id),
    };
    fetchReturn(data).then((res: any) => {
      if (res.data.message) {
        notification.error({
          placement: "bottom",
          message: res.data.message,
        })
        return
      }
      setLoading(true);
      notification.success({
        placement: "bottom",
        message: "Success",
      })
      setTimeout(() => navigate(0), 1000)
    })
  };

  const onFinishFailed = (errorInfo: any) => {
    notification.error({
      placement: "bottom",
      message: errorInfo.errorFields[0].errors[0],
    });
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="Member ID"
        name="member_id"
        rules={[{ required: true, message: "Please input Member ID!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Book ID"
        name="book_id"
        rules={[{ required: true, message: "Please input Book ID!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ lg: { offset: 8, span: 16 } }}>
        <Button type="primary" htmlType="submit" className="bg-blue-500" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ReturnForm;
