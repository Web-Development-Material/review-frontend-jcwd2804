import React, { useState } from "react";

import Input from "../../components/input";
import Button from "../../components/button";
import useNavigation from "../../hooks/useNavigation";

interface CredentialsState {
  username: string;
  password: string;
}

const Login = () => {
  const { goTo } = useNavigation();
  const [credentials, setCredentials] = useState<CredentialsState>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleLogin = () => {
    goTo("/", { username: credentials.username });
  };

  return (
    <main className="w-screen h-full flex flex-col justify-center items-center bg-gray-100">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96 space-y-5">
          <h1 className="text-2xl text-black text-center font-bold mb-4">
            Login
          </h1>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
          />
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
          />
          <Button id="login" title="Login" onClick={handleLogin} />
        </div>
      </div>
    </main>
  );
};

export default Login;
