import React from "react";
import styled from "styled-components";

const Info = ({ title, description }) => {
  return (
    <InfoWrapper>
      <h3>{title}</h3>
      <p>{description}</p>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  width: 100%;
  min-height: 10rem;
  border: 1px solid black;
  margin-bottom: 0.5rem;
  font-size: 1.6rem;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

export default Info;
