import { Metadata } from 'next';

export const metadata: { title: { absolute: string } } = {
	title: {
		absolute: 'Blog'
	}
};

export default async function Blog() {
	await new Promise((resolve) => {
		setTimeout(() => {
			resolve('intentional delay');
		},2000);
	});
	return <div>Blog</div>;
};
