import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const KEY = '?key=mysecret';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}/posts${KEY}`);

	return {
		type: FETCH_POSTS,
		payload: request
	}
}