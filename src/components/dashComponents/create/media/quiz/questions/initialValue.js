import { Slate, Editable, withReact } from "slate-react";
import { createEditor } from "slate";
const initialValue = {
	document: {
		nodes: [
			{
				object: "block",
				type: "paragraph",
				nodes: [
					{
						object: "text",
						leaves: [
							{
								text: "",
							},
						],
					},
				],
			},
		],
	},
};
export default initialValue;
