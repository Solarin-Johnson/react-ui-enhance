declare module "react-ui-enhance" {
  import React from "react";

  // Define the type of the Button component
  interface InputText {
    initialValue: string;
    onChange: (value: string) => void;
  }

  // Declare the Button component with its props
  const Button: React.FC<InputText>;

  // Export the Button component
  export { InputText };
}
