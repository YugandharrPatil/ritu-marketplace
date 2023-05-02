import Link from "next/link";

const ContactPage = () => {
	return (
		<>
			<h3>Feel free to drop a mail!</h3>
			<Link className="underline" href="mailto:ritukartik@gmail.com">
				Mail Me :)
			</Link>
		</>
	);
};

export default ContactPage;
