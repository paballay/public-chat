import { FormEvent } from "react";
import useUser from "../../hooks/useUser";
import "./style.css";

const SingIn = () => {
  const {
    user: { username, password },
    setUser,
  } = useUser();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
  };

  return (
    <div className="main">
      <h1>Pablosky's chat</h1>
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          value={username}
          autoComplete="off"
          onChange={setUser}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          value={password}
          autoComplete="off"
          onChange={setUser}
        />

        <div className="wrap">
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>
        Not registered?
        <a href="#" style={{ textDecoration: "none" }}>
          Create an account
        </a>
      </p>
    </div>
  );
};

export default SingIn;
