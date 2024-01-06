export interface Article {
	id: number;
	title: string;
	author: string;
	createdAt: Date;
	image: string;
	content?: string;
}
