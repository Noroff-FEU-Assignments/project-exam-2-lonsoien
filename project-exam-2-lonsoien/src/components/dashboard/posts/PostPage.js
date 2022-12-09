import { Link } from "react-router-dom";
import HeadingPost from "../../layout/HeadingPost";
import DashBoardPage from "../DashBoardPage";
import PostList from './PostList'; 

export default function PostPage() {
	return (
		<DashBoardPage>
			<HeadingPost size="3" content="Posts" />
			<p>
				<Link to="/dashboard/posts/add">Add post</Link>
			</p>
			<p>List posts here</p>
            <PostList />
		</DashBoardPage>
	);
}