import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
    try {
        const { data } = await axios.get(`${BASE_URL}/todos`);
        return data;
    } catch (error) {
        // Handle any errors that might occur during the request
        console.error("Error fetching posts:", error);
        throw error; // Re-throw the error to handle it further up the chain if needed
    }
};

export const getPost = async (id) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/todos/${id}`);
        return data;
    } catch (error) {
        // Handle any errors that might occur during the request
        console.error(`Error fetching post ${id}:`, error);
        throw error; // Re-throw the error to handle it further up the chain if needed
    }
};
export const getLimitPosts = async (limit) => {
    try {
        const { data } = await axios.get(`${BASE_URL}/todos?_start=${limit*10-10}&_limit=${limit*10}`);
        return data;
    } catch (error) {
        // Handle any errors that might occur during the request
        console.error("Error fetching posts:", error);
        throw error; // Re-throw the error to handle it further up the chain if needed
    }
}