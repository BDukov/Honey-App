import * as request from "../lib/request";

const baseUrl = 'https://honey-blog-app-19de5-default-rtdb.europe-west1.firebasedatabase.app/honey'

export const getAll = async () => {
    const result = await request.get(`${baseUrl}.json`);
    
    const nestedObjectsArray = Object.entries(result).map(([key, value]) => ({ [key]: value }));

    return nestedObjectsArray;
};

export const getOne = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}.json`, );

    return result;
}

export const create = async (postData) => {
    const result = await request.post(`${baseUrl}.json`, postData);

    return result;
};


export const deleteOne = async (postId) => {
    const result = await request.remove(`${baseUrl}/${postId}.json`);

    return result;
}

export const update = async (postId, postData) => {
    const result = await request.put(`${baseUrl}/${postId}.json`, postData);

    return result;
}
