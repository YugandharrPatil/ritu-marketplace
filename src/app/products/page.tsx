import Image from "next/image";
import Link from "next/link";
import Bell from "../../../public/bell.jpg";

const ProductsPage = () => {
	return (
		<>
			<div className="product">
				<Image src={Bell} alt="Bell"></Image>
			</div>
		</>
	);
};

export default ProductsPage;
