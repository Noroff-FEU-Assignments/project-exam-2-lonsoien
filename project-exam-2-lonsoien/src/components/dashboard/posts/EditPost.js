import DashBoardPage from "../DashBoardPage";
import HeadingPost from "../../layout/HeadingPost";

export default function EditPost() {
	// get id from URL
	// fetch post from the API by its id
	// populate the form with the retrieved values
	// update the values with a PUT request

	return (
		<DashBoardPage>
			<HeadingPost content="Edit Post" />
		</DashBoardPage>
	);
}