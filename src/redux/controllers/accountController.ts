import api from '../../api.ts';

const login = (user: string, password: string): Promise<any> => {
	return api.post('/login', {
		user,
		password
	});
};

export default {
	login
};
