import { Flex } from "antd";
import React from "react";
import { Card } from "../../components";
import { TextWrapper, Wrapper } from "./styles";

const Course = () => {
  return (
    <Wrapper>
      <TextWrapper>Our Courses</TextWrapper>
      <Flex
        wrap="wrap"
        gap="20px"
        justify="space-between"
        style={{ rowGap: "40px" }}
      >
        {[1, 2, 3, 4, 5].map(() => (
          <Card />
        ))}
      </Flex>
    </Wrapper>
  );
};

export default Course;
