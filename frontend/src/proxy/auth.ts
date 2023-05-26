import Password from "antd/es/input/Password";
import { loginApi } from "api/auth";
import { access_token } from "config";
import { LoginInput } from "interface/auth";

export const loginProxy = async (loginInput: LoginInput) => {
  let loginData = {
    username: loginInput.username,
    password: loginInput.password,
  };
  let loginJSON = JSON.stringify(loginData);

  let res = await loginApi(loginJSON);
  document.cookie = `access_token=${access_token}`;
  return res;
};