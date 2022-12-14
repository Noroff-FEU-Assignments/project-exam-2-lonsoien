import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../../commons/FormError";
import useAxios from "../../../hooks/useAxios";
import HeadingPost from "../../layout/HeadingPost";
import DashBoardPage from "../DashBoardPage";
import DeletePostButton from './DeletePostButton'; 

const schema = yup.object().shape({
	title: yup.string().required("Title is required"),
});

export default function EditPost() {
	const [post, setPost] = useState(null);
	const [updated, setUpdated] = useState(false);
	const [fetchingPost, setFetchingPost] = useState(true);
	const [updatingPost, setUpdatingPost] = useState(false);
	const [fetchError, setFetchError] = useState(null);
	const [updateError, setUpdateError] = useState(null);

	const { register, handleSubmit,
        formState: { errors },
     } = useForm({
		resolver: yupResolver(schema),
	});

	const http = useAxios();

	let { id } = useParams();

	const url = `wp/v2/posts/${id}`;

	useEffect(
		function () {
			async function getPost() {
				try {
					const response = await http.get(url);
					console.log("response", response.data);
					setPost(response.data);
				} catch (error) {
					console.log(error);
					setFetchError(error.toString());
				} finally {
					setFetchingPost(false);
				}
			}

			getPost();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	async function onSubmit(data) {
		setUpdatingPost(true);
		setUpdateError(null);
		setUpdated(false);

		console.log(data);

		try {
			const response = await http.put(url, data);
			console.log("response", response.data);
			setUpdated(true);
		} catch (error) {
			console.log("error", error);
			setUpdateError(error.toString());
		} finally {
			setUpdatingPost(false);
		}
	}

	if (fetchingPost) return <div>Loading...</div>;

	if (fetchError) return <div>Error loading post</div>;

	return (
		<DashBoardPage>
			<HeadingPost content="Edit Post" />

			<form onSubmit={handleSubmit(onSubmit)}>
				{updated && <div className="success">The post was updated</div>}

				{updateError && <FormError>{updateError}</FormError>}

				<fieldset disabled={updatingPost}>
					<div>
						<input name="title" defaultValue={post.title.rendered} placeholder="Title" {...register("title")} />
						{errors.title && <FormError>{errors.title.message}</FormError>}
					</div>

					<div>
						<input name="content" defaultValue={post.content.rendered} placeholder="Content" {...register("content")} />
					</div>

					<button>Update</button>
                    <br></br>
                    <DeletePostButton id={post.id} />
				</fieldset>
			</form>
		</DashBoardPage>
	);
}