import React, { useContext } from "react";
import { login } from "./login";
import { UseContact } from "./useContact";

function HomePage(props) {
  const { user, setUser } = useContext(UseContact);
  return (
    <div>
      <h1>Home Page</h1>
      <h1>{JSON.stringify(user, null, 2)}</h1>
      {user ? (
        <button onClick={() => {setUser(null)}}>logout</button>
      ) : (
        <button
          onClick={async () => {
            const users = await login();
            setUser(users);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default HomePage;
