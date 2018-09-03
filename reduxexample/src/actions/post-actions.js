import { FETCH_POSTS, NEW_POSTS } from './types';
export const fetchPosts = () => dispatch => {
    // export function fetchPosts() {
    // return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
};
// }
// }
export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application / json'
        },
        body: JSON.stringify(postData)

    }
    ).then(response => response.json())
        .then(newPost => dispatch({
            type: NEW_POSTS,
            payload: newPost
        }));
};