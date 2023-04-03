import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    initialState: {
        name: ""
        username: "",
        email: "",
        phone: "",
        token: ""
    }
})