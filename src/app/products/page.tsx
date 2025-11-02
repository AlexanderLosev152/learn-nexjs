// import styles from './styles.css;
import Link from 'next/link';

const Products = () => {
	const productId = [
		{id: 1,title: 'Products 1'},
		{id: 2,title: 'Products 2'},
		{id: 3,title: 'Products 3'},
		{id: 4,title: 'Products 4'}
	];


	return (
		<div>
			<Link href="/">Home</Link>
			{productId.map((product) => (
				<h1 key={product.id}><Link href={`./products/${product.id}`}>{product.title}</Link></h1>
			))}
		</div>
	);
};

export default Products;
