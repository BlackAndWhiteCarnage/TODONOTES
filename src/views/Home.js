import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Sidebar from "./SideBar";
import Modal from "./Modal";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <HomeWrapper>
      <Modal />
      <Sidebar />
      <Hero />
      <Navbar />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #ededed;
  display: flex;
`;

export default Home;
