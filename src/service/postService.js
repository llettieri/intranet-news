import axios from 'axios';

const url = process.env.REACT_APP_API_BASE_URL;

//Create
export async function addPost(post) {
    return axios.post(url + 'post/', post)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

//Read
export async function getPostByID(id) {
    return axios.get(url + 'post/' + id)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

export async function getAllPosts() {
    return axios.get(url + 'post/')
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

//Update
export async function updatePost(post) {
    return axios.put(url + 'post/' + post.id, post)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}

//Delete
export async function deletePost(id) {
    return axios.delete(url + 'post/' + id)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error;
        });
}