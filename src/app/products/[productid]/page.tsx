// import styles from './styles.css;
import { Metadata } from 'next';

type Props = {
	params: Promise<{ productid: string }>
}
export const generateMetadata = async (
	{params}: Props): Promise<{ title: string }> => {
	const id = (await params).productid;
	const title = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`IPhone ${id}`);
		});
	});
	return {
		title: `Product ${title}`
	};
};

export default async function ProductDetails({params}: { params: Promise<{ productid: string }> }) {
	const productid = (await params).productid;
	return (
		<div>
			Details Page Products {productid}
		</div>
	);
};
