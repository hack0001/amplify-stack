const slideLayout = [
	{
		name: "slideImage",
		type: "image",
		alt: "slideImageAlt",
	},

	{
		name: "slidePosition",
		placeholder: "Position",
		type: "selectField",
		layout: "inline-block",
		width: "25%",
	},
	{
		name: "slideImageAlt",
		placeholder: "Alt Tag",
		type: "textField",
		width: "100%",
	},

	{
		name: "slide",
		placeholder: "Slide Title",
		type: "textField",
		width: "100%",
	},

	{
		name: "slideImageAttribution",
		placeholder: "Attribution",
		type: "textField",
		width: "50%",
	},
	{
		name: "slideImageAttributionLink",
		placeholder: "Attribution Link",
		type: "textField",
		width: "50%",
	},
	{
		name: "slideDetails",
		placeholder: "Slide Details",
		type: "editor",
		width: "100%",
	},
];
export { slideLayout };
