
import React from "react";
import styled from "styled-components";
import child from "./Child";

const Parent = () => {
  return (
    <Wrapper>
      <h2>Parent Comp</h2>
      <child />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
  font-size: 3.2rem;
`;

export default Parent;
