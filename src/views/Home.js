import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Sidebar from "./SideBar";
import Modal from "./Modal";

const Home = () => {
  return (
    <HomeWrapper>
      <Modal />
      <Sidebar />
      <Hero />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export default Home;
