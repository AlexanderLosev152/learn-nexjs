import Link from 'next/link';

export default function ProductDetailsLayout(
	{children}: { children: React.ReactNode; }
) {
	return (
		<>
			{children}
			<h2>Featured products</h2>
			<Link href="/products">Products</Link>
		</>
	);
};
