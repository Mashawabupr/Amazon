import React from "react";
import CurrencyFormat from "react-currency-format";
function CurrencyFormatC({ title, value, amount }) {
  console.log(amount);
  return (
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            {title === "payment"
              ? "Order total "
              : `Subtotal (${amount ? amount : 0}) items `}
            :<strong> {value}</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={value} // Part of the homework
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
}

export default CurrencyFormatC;
