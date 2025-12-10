import { useId } from "react";
import React from "react";
import "./InputBox.css";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrncy = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  function getFlag(code) {
    if (!code) return "";
    const country = code.slice(0, 2); // USD → US, INR → IN
    return String.fromCodePoint(
      ...[...country.toUpperCase()].map((c) => c.charCodeAt(0) + 127397)
    );
  }

  return (
    <div className={`text-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-whitw/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          id={amountInputId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 cursor-pointer outline-none"
          value={selectCurrncy}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option
              className="text-white bg-black"
              key={currency}
              value={currency}
            >
              {getFlag(currency)} {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
