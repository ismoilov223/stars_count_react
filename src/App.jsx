import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
function App() {
  return (
    <div className="cont w-full h-full px-6 md:px-0 flex items-center">
      <div className="box max-w-[412px] mx-auto bg-[#232A34] rounded-[30px] p-8">
       <Header></Header>
       <Main></Main>
      </div>
    </div>
  );
}

export default App;
