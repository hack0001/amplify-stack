import React, { useEffect, useState, useRef } from "react";
import Embedo from "./embedo";
import LinearProgress from "@material-ui/core/LinearProgress";

const EmbedUrl = props => {
	const { url } = props;
	const embedoContainer = useRef(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		handleEmbed(url);
	}, [url]);

	const handleEmbed = url => {
		Embedo.destroy(embedoContainer.current);

		Embedo.load(embedoContainer.current, url, {})
			.done(data => {
				setLoading(false);
			})
			.fail(err => {
				console.error("error", err);
				setLoading(false);
			});
	};

	if (loading) {
		return <LinearProgress />;
	}

	return (
		<div>
			<div
				className={"embedo"}
				target="_blank"
				rel="noopener noreferrer"
				ref={embedoContainer}
			/>
		</div>
	);
};

export default EmbedUrl;
