import React from "react";
import {
  CourseName,
  Description,
  ImageProduct,
  Text,
  Wrapper,
} from "./styles";
import { Col, Flex, Row } from "antd";
import { Review } from "../../components";

const SingleCourse = () => {
  return (
    <Wrapper>
      <Row>
        <Col span={12}>
          <ImageProduct>
            <img src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          </ImageProduct>
        </Col>
        <Col span={12}>
          <Flex gap="middle" vertical justify="center">
            <CourseName>Algebra</CourseName>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident recusandae amet aperiam incidunt tempora totam nesciunt
              unde omnis dicta, quia, optio distinctio at, doloribus sint?
            </Description>
            <Text>$55.00</Text>
            <Review />
            <Text>By Jon Bolunt</Text>
            <Text>0123456789</Text>
          </Flex>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default SingleCourse;
