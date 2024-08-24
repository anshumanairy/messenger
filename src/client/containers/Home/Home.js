import React, { useState } from "react";
import loadable from "@loadable/component";
import styled from "styled-components";

const Login = loadable(() => import("../Login"));
const Register = loadable(() => import("../Register"));

const Wrapper = styled.div`
  height: 100vh;
  background-color: black;
`;

const Home = () => {
  const [baseState, setBaseState] = useState("login");

  return (
    <Wrapper className="dFA jcC">
      <div className="dFA fdC">
        <img src="/assets/images/logo.svg" />
        {baseState === "login" ? (
          <Login setBaseState={setBaseState} />
        ) : (
          <Register setBaseState={setBaseState} />
        )}
      </div>
    </Wrapper>
  );
};

export default Home;
