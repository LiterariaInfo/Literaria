export type status = 'idle' | 'loading' | 'failed' | 'succeeded';

export interface Directory {
	id: number;
	name: string;
	image: string;
	description: string;
	articles?: Article[];
	directories?: Directory[];
	status: status;
}

export interface Article {
	id: number;
	image: string;
	name: string;
	author: string;
	createdAt: Date;
	content?: string;
	status: status;
}

export interface ArticleStateModel {
	articles: {
		[key: number]: {
			data?: Article;
			status: status;
		};
	};
	recommended: {
		articles: Article[];
		status: status;
	};
	latest: {
		articles: Article[];
		status: status;
	};
}

export interface DirectoryStateModel {
	[key: number]: {
		data?: Directory;
		status: status;
	};
}

export interface AccountStateModel {
	account: {
		user: string;
		id: number;
	};
	status: status;
}
