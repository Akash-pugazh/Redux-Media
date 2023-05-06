import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("user/add", async () => {
  const response = await axios.post("http://localhost:3000/users", {
    name: faker.name.fullname()
  });

  return response.data;
});

export { addUser };

