export default async function ProductReview({params}: {
	params: Promise<{ productid: string;reviewid: string }>
}) {
	const {productid,reviewid} = await params;
	return (
		<h1>Review {reviewid} for product {productid}</h1>
	);
};
