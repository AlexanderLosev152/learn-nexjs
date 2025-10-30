// import styles from './style.module.scss;
export default async function ProductDetails({params}: { params: Promise<{ productid: string }> }) {
	const productid = (await params).productid;
	return (
		<div>
			Details Page Products {productid}
		</div>
	);
};

// const ProductDetails = () => {
// 	return (
// 		<div>
// 			Details Page Products
// 		</div>
// 	);
// };
//
// export default ProductDetails;
