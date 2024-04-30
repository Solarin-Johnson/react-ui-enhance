import React, { useState } from "react";
import { InputText } from "./lib/input";
import ToolTip from "./lib/tooltip";
export default function App() {
  const [value, setvalue] = useState("");
  const handleChange = (e) => {
    setvalue(e);
  };
  return (
    <>
      <InputText
        onChange={handleChange}
        placeholder={"Enter your fuvking name"}
        icon
      />
      <p>{value}</p>
      <ToolTip message="Pussy Nigga Was here ">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        quia harum quidem sapiente laborum esse excepturi exercitationem
        veritatis placeat fugit delectus deleniti vero quae alias corporis
        dicta, iure quo itaque.
      </ToolTip>
    </>
  );
}
