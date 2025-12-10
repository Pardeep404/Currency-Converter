import { useState } from "react";
import "./App.css";
import InputBox from "./component";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { ArrowDownUp } from "lucide-react";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const option = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
  setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-start md:items-center pt-5 p-1 md:pt-0 md:p-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/019/523/909/non_2x/abstract-currency-digital-finance-technology-modern-currency-exchange-transfer-profit-on-modern-background-futuristic-wave-flowing-blue-vector.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="w-full ">
        <div className="relative w-full max-w-md mx-auto rounded-lg p-4 backdrop-blur-sm shadow">
        <div className=" relative z-10 flex justify-center items-center text-white/90 text-2xl font-bold pb-5">Currency Converter</div>
          <div className="absolute inset-0 bg-black/50"></div>
          <form
            className="relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" amount={amount} currencyOptions={option} onCurrencyChange={((currency)=>setAmount(amount))} selectCurrncy={from} onAmountChange={(amount)=>setAmount(amount)}/>
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md text-white px-2 py-0.5 cursor-pointer"
                onClick={swap}
              >
                <ArrowDownUp/>
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" amount={convertedAmount} currencyOptions={option} onCurrencyChange={((currency)=>setTo(currency))} selectCurrncy={to} amountDisable/>
            </div>
            <button
              type="submit" role="button"
              className="w-full button-82-pushable px-4 py-3 rounded-lg font-bold border"
            ><span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
              Convert
              </span>
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
