<<<<<<< HEAD
// import styles from './style.module.scss;
=======
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

>>>>>>> a956466 (metadata)
export default async function ProductDetails({params}: { params: Promise<{ productid: string }> }) {
	const productid = (await params).productid;
	return (
		<div>
			Details Page Products {productid}
		</div>
	);
};
<<<<<<< HEAD

// const ProductDetails = () => {
// 	return (
// 		<div>
// 			Details Page Products
// 		</div>
// 	);
// };
//
// export default ProductDetails;
=======
>>>>>>> a956466 (metadata)
