import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
import { registerFieldsData } from "./constants";

let LoginWrapper = styled.div`
  color: #6b6c70;
  background: #27292d;
  border-radius: 8px;
  border-image-source: linear-gradient(129.59deg, #969696 0%, #343434 98.18%);
  padding: 40px 24px;
  margin-top: 50px;

  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 16.94px;
  letter-spacing: 0.03em;

  label {
    color: #c5c7ca;
  }
`;

let Typography = styled.p`
  ${({ type }) => {
    switch (type) {
      case "heading":
        return css`
          font-size: 18px;
          font-weight: 600;
          line-height: 21.78px;
          color: #ffffff;
        `;
      case "register-label":
        return css`
          margin-top: 12px;
          cursor: pointer;

          span {
            color: #ffffff;
          }
        `;
      default:
        return css``;
    }
  }}
`;

let FieldsWrapper = styled.div`
  margin: 45px 0 20px;
  gap: 16px;
`;

let InputFieldWrapper = styled.div`
  .forgot-password {
    font-size: 12px;
    font-weight: 500;
    line-height: 14.52px;
  }

  .show-pasword {
    top: 22px;
    right: 10px;
  }

  .error {
    color: red;
    font-size: 12px;
    margin-top: 5px;
  }

  .cross {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .cross::before,
  .cross::after {
    content: "";
    position: absolute;
    height: 40%;
    width: 2px;
    background-color: #6b6c70;
    top: 35%;
    right: 4.8%;
    transform: rotate(-45deg);
  }

  input {
    background: transparent;
    color: #ffffff;
    width: 30vw;
    padding: 12px;
    margin-top: 10px;

    border-radius: 4px;
    border: 1.5px solid #35373b;

    font-size: 16px;
    font-weight: 400;
    line-height: 19.36px;
  }
`;

const Register = (props) => {
  const { setBaseState } = props;
  const history = useHistory();

  const [fieldsData, setFieldsData] = useState([...registerFieldsData]);
  const [registerData, setRegisterData] = useState({
    showPassword: false,
  });

  const handleFieldChange = (event, index) => {
    const value = event.target.value;
    let fields = [...fieldsData];
    let currentField = fields[index];

    if (currentField?.regex) {
      if (currentField?.regex && !currentField?.regex.test(value)) {
        currentField["errorData"]["show"] = true;
      } else {
        currentField["errorData"]["show"] = false;
      }

      setFieldsData([...fields]);
    } else if (value?.length > 0) {
      currentField["errorData"]["show"] = false;

      setFieldsData([...fields]);
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    let fields = [...fieldsData];
    const formData = new FormData(event.target);
    formData.forEach((value, key) => {
      let currentField = fields?.find((field) => field?.name === key);

      if (value?.length > 0) {
        if (!currentField?.errorData?.show) {
          if (currentField?.type === "password" && value?.length < 8) {
            currentField["errorData"] = {
              show: true,
              errorMessage: "Password should have atleast 8 characters",
            };

            setFieldsData([...fields]);
          }
        }
      } else {
        currentField["errorData"] = {
          show: true,
          errorMessage:
            currentField["errorData"]?.errorMessage ||
            "Please fill in the login details",
        };

        setFieldsData([...fields]);
      }
    });

    // Error Check
    let loginErrors =
      fieldsData?.filter((field) => field?.errorData?.show)?.length > 0;

    if (!loginErrors) {
      if (props?.setShowLoginModal) {
        props?.setShowLoginModal(false);
      }
      history.push("/dashboard");
    }
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <LoginWrapper className="dF fdC">
        <Typography className="taC">SIGN UP</Typography>
        <Typography className="taC" type="heading">
          Create an account to continue
        </Typography>

        <FieldsWrapper className="dF fdC">
          {fieldsData?.map((field, index) => {
            return (
              <InputFieldWrapper className="dF fdC" key={index}>
                <div className="pR">
                  <div className="dF fdC">
                    <input
                      name={field?.name}
                      onChange={(event) => handleFieldChange(event, index)}
                      type={
                        field?.type === "password"
                          ? registerData?.showPassword
                            ? "text"
                            : field?.type
                          : field?.type
                      }
                      placeholder={field?.placeholder}
                    />
                    {field?.errorData?.show && (
                      <label className="error">
                        {field?.errorData?.errorMessage}
                      </label>
                    )}
                  </div>
                  {field?.type === "password" && (
                    <>
                      <img
                        className="show-pasword pA cP"
                        src="/assets/images/eye.svg"
                        height="20"
                        width="20"
                        onClick={() =>
                          setRegisterData({
                            ...registerData,
                            showPassword: !registerData?.showPassword,
                          })
                        }
                      />
                      {registerData?.showPassword && <span className="cross" />}
                    </>
                  )}
                </div>
              </InputFieldWrapper>
            );
          })}
        </FieldsWrapper>
        <Button btnType="primary" size="md" type="submit">
          Continue
        </Button>
        <Typography
          type="register-label"
          className="hU"
          onClick={() => setBaseState("login")}
        >
          Already have an account? <span>Login</span>
        </Typography>
      </LoginWrapper>
    </form>
  );
};

export default Register;
