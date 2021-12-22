import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Todo = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(console.log(e.target.value));
  };

  const handleInput = () => {
    console.log(value);
  };

  return (
    <div>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        onChange={handleChange}
      />
      <Button onClick={() => handleInput()}>Input</Button>
    </div>
  );
};

export default Todo;
