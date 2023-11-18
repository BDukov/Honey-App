/* eslint-disable no-unused-vars */
import * as request from '../lib/request';

const baseUrl = 'https://honey-blog-db181-default-rtdb.europe-west1.firebasedatabase.app/comments.json';

export const getAll = async (postId) => {
    const query = new URLSearchParams({
        where: `postId="${postId}"`
    });

    const result = await request.get(`${baseUrl}`);

    return Object.values(result).filter(comment => comment.postId === postId);
};

export const create = async (postId, username, text) => {
    const newComment = await request.post(baseUrl, {
        postId,
        username, 
        text,
    });

    return newComment;
};