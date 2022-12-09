import PropTypes from "prop-types";

function HeadingPost({ size = "1", content }) {
	const VariableHeading = `h${size}`;

	return <VariableHeading>{content}</VariableHeading>;
}

HeadingPost.propTypes = {
	size: PropTypes.string,
	content: PropTypes.string.isRequired,
};

export default HeadingPost;