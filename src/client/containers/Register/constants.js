export const registerFieldsData = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    errorData: {
      show: false,
      errorMessage: "Invalid Email Address",
    },
  },
  {
    name: "username",
    label: "Username",
    placeholder: "Choose a preferred username",
    type: "text",
    errorData: {
      show: false,
    },
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Choose a strong password",
    type: "password",
    errorData: {
      show: false,
    },
  },
];
