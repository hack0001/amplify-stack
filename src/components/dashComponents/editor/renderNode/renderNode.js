import React from "react";
import Embed from "./embed/embed";
import Quote from "./quote/quote";
import EmbedImage from "./embedImage/embedImage";
import Paragraph from "./paragraph/paragraph";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const formatSize = 18;
const lineHeight = 1.75;

const renderNode = (props, editor, next) => {
	const { attributes, children, node } = props;
	switch (node.type) {
		case "code":
			return <code {...attributes}>{children}</code>;
		case "paragraph":
			return <Paragraph {...props} {...attributes} {...node} {...children} />;
		case "heading-one":
			return (
				<Typography variant="h1" {...attributes}>
					{children}
				</Typography>
			);
		case "heading-two":
			return (
				<Typography variant="h2" {...attributes}>
					{children}
				</Typography>
			);
		case "heading-three":
			return (
				<Typography variant="h3" {...attributes}>
					{children}
				</Typography>
			);
		case "heading-four":
			return (
				<Typography variant="h4" {...attributes}>
					{children}
				</Typography>
			);
		case "heading-five":
			return (
				<Typography variant="h5" {...attributes}>
					{children}
				</Typography>
			);
		case "format-align-left":
			return (
				<Box
					variant="body1"
					gutterBottom
					fontSize={formatSize}
					lineHeight={lineHeight}
					fontStyle="normal"
					align="left"
					{...attributes}
				>
					{children}
				</Box>
			);
		case "format-align-center":
			return (
				<Box
					variant="body1"
					gutterBottom
					fontSize={formatSize}
					lineHeight={lineHeight}
					fontStyle="normal"
					align="center"
					{...attributes}
				>
					{children}
				</Box>
			);
		case "format-align-right":
			return (
				<Box
					variant="body1"
					gutterBottom
					fontSize={formatSize}
					lineHeight={lineHeight}
					fontStyle="normal"
					align="right"
					{...attributes}
				>
					{children}
				</Box>
			);
		case "format-align-justify":
			return (
				<Box
					variant="body1"
					gutterBottom
					fontSize={formatSize}
					lineHeight={lineHeight}
					fontStyle="normal"
					align="justify"
					{...attributes}
				>
					{children}
				</Box>
			);
		case "bulleted-list":
			return (
				<ul style={{ fontSize: formatSize }} {...attributes}>
					{children}
				</ul>
			);
		case "numbered-list":
			return (
				<ol style={{ fontSize: formatSize }} {...attributes}>
					{children}
				</ol>
			);
		case "list-item":
			return (
				<li style={{ fontSize: formatSize }} {...attributes}>
					{children}
				</li>
			);
		case "quote":
			return <Quote {...props} {...attributes} {...node} {...children} />;
		case "horizontal-line":
			return (
				<span
					{...attributes}
					style={{
						borderBottom: "1px solid #000",
						display: "block",
						opacity: 0.2,
					}}
				>
					{children}
				</span>
			);

		case "embed-image":
			return <EmbedImage {...props} {...attributes} {...node} {...children} />;
		case "embed":
			return <Embed {...props} {...attributes} {...node} {...children} />;
		case "paid-ad":
			return (
				<Box
					variant="body1"
					gutterBottom
					fontSize={formatSize}
					lineHeight={5}
					fontStyle="normal"
					align="center"
					{...attributes}
					style={{ color: "grey" }}
				>
					____________ADVERT____________
					{children}
				</Box>
			);
		case "site-ad":
			return (
				<Box
					variant="body1"
					gutterBottom
					fontSize={formatSize}
					lineHeight={5}
					fontStyle="normal"
					align="center"
					{...attributes}
					style={{ color: "grey" }}
				>
					____________SITE_ADVERT____________
					{children}
				</Box>
			);
		case "link-ad":
			return (
				<Box
					variant="body1"
					gutterBottom
					fontSize={formatSize}
					lineHeight={5}
					fontStyle="normal"
					align="center"
					{...attributes}
					style={{ color: "grey" }}
				>
					____________SITE_LINK_ADVERT____________
					{children}
				</Box>
			);
		default:
			return next();
	}
};

export default renderNode;
