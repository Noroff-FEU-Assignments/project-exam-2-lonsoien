import PropTypes from "prop-types";
import HeadingPost from "../layout/HeadingPost";
import DashboardMenu from "./DashBoardMenu";

export default function Dashboard({ children }) {
	return (
		<>
			<HeadingPost content="Dashboard" />
			<DashboardMenu />
			{children ? children : <p>Select a section</p>}
		</>
	);
}

Dashboard.propTypes = {
	children: PropTypes.node,
};