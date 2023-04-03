import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const handler = createAsyncThunk
const userSlice = createSlice({
    initialState: {
        name: "",
        username: "",
        email: "",
        phone: "",
        token: "",
        status: false
    },
})

export const login = async handler((username, password) => {
    const url = "http://localhost:8080/users/login"
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({username, password})
    })
    const data = await res.json()
    const token = data.token

    if (token) localStorage.setItem("token", token)
})