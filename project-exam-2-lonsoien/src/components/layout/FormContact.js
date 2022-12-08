import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
	firstname: yup.string().required("Please enter your name").min(3, "enter valid firstname"),
	email: yup.string().required("Please enter an email address").email("Please enter a valid email address"),
	message: yup.string().required("Please enter your message").min(10, "The message must be at least 10 characters"),
});

function FormContact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	function onSubmit(data) {
		console.log(data);
	}

	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h3 style={{textAlign: "left", marginTop: "20px"}}>Send oss forespørsel:</h3>
			<br></br>
			<p>Name:</p>
			<input {...register("name")} />
			{errors.firstname && <span>{errors.firstname.message}</span>}
			<p>Email:</p>
			<input {...register("email")} />
			{errors.email && <span>{errors.email.message}</span>}
			<br></br>
			{errors.subject && <span>{errors.subject.message}</span>}
			<p>Message:</p>
			<textarea {...register("message")} />
			{errors.message && <span>{errors.message.message}</span>}

			<button>Send</button>
		</form>
	);
}

export default FormContact;

