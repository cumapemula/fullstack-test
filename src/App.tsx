import "./App.css";
import { Col, Divider, Row } from "antd";
import BookList from "./components/BookList";
import MemberList from "./components/MemberList";
import BorrowForm from "./components/BorrowForm";
import ReturnForm from "./components/ReturnForm";
import TransactionList from "./components/TransactionList";

const App: React.FC = () => {
  return (
    <>
      <Row className="min-h-screen pb-20" gutter={[0, 100]}>
        <Col xs={{ span: 20, offset: 1 }} lg={{ span: 16, offset: 4 }}>
          <Divider>List Of Available Books</Divider>
          <BookList></BookList>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} lg={{ span: 16, offset: 4 }}>
          <Divider>Member List</Divider>
          <MemberList></MemberList>
        </Col>
        <Col xs={{ span: 20, offset: 1 }} lg={{ span: 16, offset: 4 }}>
          <Divider>Transaction List</Divider>
          <TransactionList></TransactionList>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 11, offset: 1 }}>
          <Divider>Borrow Form</Divider>
          <BorrowForm></BorrowForm>
        </Col>
        <Col xs={{ span: 20, offset: 2 }} lg={{ span: 11, offset: 1 }}>
          <Divider>Return Form</Divider>
          <ReturnForm></ReturnForm>
        </Col>
      </Row>
    </>
  );
};

export default App;
