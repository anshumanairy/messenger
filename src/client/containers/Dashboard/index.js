import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
import Modal from "../../components/Modal/Modal";
import { postsData } from "./constants";

const Login = loadable(() => import("../Login"));
const Register = loadable(() => import("../Register"));

let DashboardWrapper = styled.div`
  height: 100vh;
  background-color: black;

  color: #7f8084;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  .innerWrapper {
    max-width: 50vw;
  }
`;

let Typography = styled.p`
  ${({ type }) => {
    switch (type) {
      case "heading":
        return css`
          color: #c5c7ca;
          font-size: 28px;
          font-weight: 500;
          line-height: 33.89px;
          text-align: left;
        `;
      case "post-heading":
        return css`
          color: #c5c7ca;
          font-size: 18px;
          font-weight: 500;
          line-height: 21.78px;
        `;
      case "user-name":
        return css`
          color: #c5c7ca;
          font-size: 16px;
          font-weight: 500;
          line-height: 19.36px;
        `;
      case "post-data":
        return css`
          color: #7f8084;
          font-size: 14px;
          font-weight: 500;
          line-height: 16.94px;
        `;
      default:
        return css``;
    }
  }}
`;

let PostWrapper = styled.div`
  margin-top: 40px;
  gap: 16px;
`;

let Post = styled.div`
  border: 2px solid #35373b;
  background: #27292d;
  padding: 24px 20px;
  border-radius: 8px;
  gap: 16px;

  .post-inner {
    background: #191920;
    padding: 15px 16px;
    border-radius: 8px;

    .feel-span {
      padding: 12px;
      background: #27292d;
      border-radius: 44px;
      font-size: 24px;
      margin-right: 16px;
    }
  }

  input {
    width: 100%;
    background: transparent;
    color: #ffffff;

    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    margin-left: 16px;
  }

  ${({ type }) => {
    switch (type) {
      case "create-post":
        return css`
          .post-button {
            width: 20%;
            align-self: flex-end;
            font-size: 16px;
            font-weight: 500;
            line-height: 19.36px;
          }
        `;
      case "user-post":
        return css`
          .user-image {
            height: 44px;
            width: 44px;
            background: #c5c7ca;
            border-radius: 44px;
            font-size: 24px;
            margin-right: 16px;
          }
        `;
      default:
        return css``;
    }
  }};
`;

const Dashboard = () => {
  const [baseState, setBaseState] = useState("login");
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const navigationEntries = performance.getEntriesByType("navigation");
    if (
      navigationEntries.length > 0 &&
      navigationEntries[0].type === "reload"
    ) {
      setShowLoginModal(true);
    }
  }, []);

  return (
    <>
      <DashboardWrapper className="dFA jcC">
        <div className="innerWrapper dF fdC">
          <Typography type="heading">Hello Jane</Typography>
          <Typography>
            How are you doing today? Would you like to share something with the
            community 🤗
          </Typography>
          <PostWrapper className="dF fdC">
            <Post className="dF fdC" type="create-post">
              <Typography type="post-heading">Create post</Typography>
              <div className="post-inner dFA">
                <img src="/assets/images/post.png" />
                <input placeholder="How are you feeling today?" type="text" />
              </div>
              <Button
                className="post-button"
                btnType="primary"
                size="md"
                type="submit"
              >
                Post
              </Button>
            </Post>
            {postsData?.map((post, index) => {
              return (
                <Post key={index} className="dF fdC" type="user-post">
                  <div className="dFA">
                    <span className="user-image dFA jcC">
                      {post?.userName?.charAt(0)?.toUpperCase()}
                    </span>
                    <div className="dF fdC">
                      <Typography type="user-name">{post?.userName}</Typography>
                      <Typography type="post-data">
                        {post?.createdTime}
                      </Typography>
                    </div>
                  </div>
                  <div className="post-inner dFA">
                    <span className="feel-span">{post?.data?.feel}</span>
                    <Typography>{post?.data?.value}</Typography>
                  </div>
                </Post>
              );
            })}
          </PostWrapper>
        </div>
        {showLoginModal && (
          <Modal full={true} size="sm" withHeader={false}>
            <>
              {baseState === "login" ? (
                <Login
                  setBaseState={setBaseState}
                  setShowLoginModal={setShowLoginModal}
                />
              ) : (
                <Register
                  setBaseState={setBaseState}
                  setShowLoginModal={setShowLoginModal}
                />
              )}
            </>
          </Modal>
        )}
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
