<<<<<<< HEAD
=======
import { notFound } from 'next/navigation';

>>>>>>> a956466 (metadata)
export default async function ProductReview({params}: {
	params: Promise<{ productid: string;reviewid: string }>
}) {
	const {productid,reviewid} = await params;
<<<<<<< HEAD
=======
	if (parseInt(reviewid) > 1000) {
		notFound();
	}
>>>>>>> a956466 (metadata)
	return (
		<h1>Review {reviewid} for product {productid}</h1>
	);
};
