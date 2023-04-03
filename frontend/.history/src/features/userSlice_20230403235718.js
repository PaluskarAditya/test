import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const handler = createAsyncThunk
const userSlice = createSlice({
    initialState: {
        name: "",
        username: "",
        email: "",
        phone: "",
        token: ""
    },
    
})