export const loginFieldsData = [
  {
    name: "email",
    label: "Email or Username",
    placeholder: "Enter your email or username",
    type: "email",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    errorData: {
      show: false,
      errorMessage: "Invalid Email Address",
    },
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    errorData: {
      show: false,
    },
  },
];
