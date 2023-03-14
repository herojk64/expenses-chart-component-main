import React from "react";
import logo from "./images/logo.svg";
import Body from "./Container/Body";
import "./App.css";

function App() {
  const TotalBalance = 921.48;
  const TotalOfMonth = 478.33;
  return (
    <div className="h-screen bg-primary_bgRed flex justify-center items-center font-sans">
      <main className="mx-auto container p-4 sm:w-96 md:w-128 lg:w-192 xl:w-256 2xl:w-320">
        <header className="flex my-4 bg-primary_Red p-4 rounded-xl items-center">
          <div className="text-white">
            <h5 className="text-sm">My Balance</h5>
            <span className="block font-bold text-2xl mt-2">
              ${TotalBalance}
            </span>
          </div>
          <img src={logo} className={`ml-auto w-12`} />
        </header>
        <Body
          TotalOfMonth={TotalOfMonth}
          className={`p-4 bg-white rounded-xl`}
        />
      </main>
      <footer hidden={true}>
        <div class="attribution">
          Challenge by{"Amit Dhakal"}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.frontendmentor.io/profile/herojk64">Amit Dhakal</a>.
        </div>
      </footer>
    </div>
  );
}

export default App;
