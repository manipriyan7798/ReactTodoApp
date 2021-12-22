import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Todo = () => {
  const [value, setValue] = useState(null);
  const [print, setPrint] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  //   const handleInput = () => {
  //     console.log(value);
  //   };

  return (
    <div>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        // onSubmit={handleChange}
        onChange={handleChange}
      />
      <Button onClick={() => setPrint(true)}>Input</Button>
      {print ? <p>{value}</p> : null}
    </div>
  );
};

export default Todo;
