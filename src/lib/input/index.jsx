import React, { useEffect, useState } from "react";
import "./input.scss";

export function InputText({
  value = "",
  onChange = () => {},
  readOnly,
  disabled,
  width = "20",
  maxLength,
  placeholder,
  animate,
  styles,
  icon,
}) {
  const [input, setinput] = useState(value);
  const handleChange = (e) => {
    const newValue = e.target.value;
    setinput(newValue);
    onChange(newValue);
  };
  return (
    <div className="enhance-input-container">
      <form>
        <span></span>
        <input
          className={`${!styles ? "enhance-input-text" : ""} ${
            icon ? " text-icon" : ""
          }`}
          type="text"
          value={input}
          onChange={handleChange}
          readOnly={readOnly}
          disabled={disabled}
          size={width}
          placeholder={placeholder}
          maxLength={maxLength}
          required
          minLength={20}
        />
        <button>ss</button>
      </form>
    </div>
  );
}
