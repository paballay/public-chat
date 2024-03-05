import { ChangeEvent, useState } from "react";

interface User {
  username: string;
  password: string;
}

const useUser = () => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  return {
    setUser: handleInputChange,
    user,
  };
};

export default useUser;
