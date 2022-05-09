import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Home";
import Menu from "./Menu.js";
import Header from "./Header";
import Habits from "./Habits";
import GlobalStyle from "./../assets/globalStyle/";
import UserContext from "./../assets/Context";
import History from "./History";

function App() {
  const [user, setUser] = useState(null);

  function Error(e, navigate) {
    console.log(`${e.response.status} - ${e.response.statusText}`);
    alert("Um erro aconteceu, tente novamente");
    navigate("/");
  }

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider
        value={{
            user,
            setUser,
            Error,
      }}
      >
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path ="/cadastro" element ={<SignUp />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/historico" element={<History />} />
          </Routes>
          <Menu />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;