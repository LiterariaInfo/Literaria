import axios from 'axios';

export const baseURL: string = 'http://localhost:6969';

const api = axios.create({
	baseURL: `${baseURL}/api`
});

api.interceptors.request.use(
	async function (config) {
		const session = localStorage.getItem('session');
		if (session !== undefined) {
			config.headers.Authorization = `Bearer ${session}`;
		}

		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default api;