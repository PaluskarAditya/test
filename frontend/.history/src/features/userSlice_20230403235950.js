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

export const login = async (username, password) => {
    const url = "http://localhost:8080/users/login"
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({username, password})
    })
}