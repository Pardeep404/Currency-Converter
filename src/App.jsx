import { useState } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const data = useCurrencyInfo("inr");
  console.log("Converted Data:", data);

  return (
    <>
      <div className="flex justify-center items-center max-h-dvh min-h-dvh overflow-y-scroll bg-black text-white">
        <div>
          <h1>Currency Converter</h1>
        </div>
      </div>
    </>
  );
}

export default App;
