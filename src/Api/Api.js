// import axios from "axios";
// import { BaseUrl } from "./BaseUrl";

import axios from "axios";
import { BaseUrl } from "../BaseUrl";



export const getApi = async (endpoint, requestdata) => {
    try {
        const items = await axios.get(`${BaseUrl}${endpoint}`, requestdata);
        return items.data;
    } catch (errors) {
        return { data: errors?.response?.data }
    }
}

export const postapi = async (endpoint, requestdata) => {
    try {
        const items = await axios.post(`${BaseUrl}${endpoint}`, requestdata);
        return items.data;
    } catch (errors) {
        return { data: errors?.response?.data }
    }
}

export const superadminloginapi = async (endpoint, requestdata) => {
    try {
        const items = await axios.post(`${BaseUrl}${endpoint}`, requestdata);
        return items.data;
    } catch (errors) {

        return { data: errors?.response?.data }
    }
}

export const staffloginapi = async (endpoint, requestdata) => {
    try {
        const items = await axios.post(`${BaseUrl}${endpoint}`, requestdata);
        return items.data;
    } catch (errors) {

        return { data: errors?.response?.data }
    }
}

export const superadminpostapi = async (endpoint, requestdata, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    }
    try {
        const items = await axios.post(`${BaseUrl}${endpoint}`, requestdata, { headers });
        return items.data;
    } catch (errors) {

        return { data: errors?.response?.data }
    }
}

export const superadminputapi = async (endpoint, requestdata, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    }
    try {
        const items = await axios.put(`${BaseUrl}${endpoint}`, requestdata, { headers });
        return items.data;
    } catch (errors) {

        return { data: errors?.response?.data }
    }
}

export const superadmingetapi = async (endpoint, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    }
    try {
        const items = await axios.get(`${BaseUrl}${endpoint}`, { headers });
        return items.data;
    } catch (errors) {

        return { data: errors.response.data }
    }
}


export const mastergetapi = async (endpoint, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    }
    try {
        const items = await axios.get(`${BaseUrl}${endpoint}`, { headers });
        return items.data;
    } catch (errors) {

        return { data: errors?.response?.data }
    }
}

export const masterpostapi = async (endpoint, requestdata, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    }
    try {
        const items = await axios.post(`${BaseUrl}${endpoint}`, requestdata, { headers });
        return items.data;
    } catch (errors) {

        return { data: errors?.response?.data }
    }
}

export const masterputapi = async (endpoint, requestdata, token) => {
    const headers = {
        Authorization: `Bearer ${token}`
    }
    try {
        const items = await axios.put(`${BaseUrl}${endpoint}`, requestdata, { headers });
        return items.data;
    } catch (errors) {

        return { data: errors.response.data }
    }
}


export const masterdeleteapi = async (endpoint, requestdata, token) => {

    const headers = {
        Authorization: `Bearer ${token}`
    }
    try {
        const items = await axios.delete(`${BaseUrl}${endpoint}`, requestdata, { headers });
        return items.data;
    } catch (errors) {

        return { data: errors.response.data }
    }
}