const INITIAL_SLIDESHOW_DETAILS = {
	headlineImage: "",
	headlineImageAlt: "",
	headlineImageAttribution: "",
	headlineImageAttributionLink: "",
	title: "",
	blurb: "",
	slideUrl: "",
	metaTag: "",
	slideTitle: "",
	slideCategory: "",
	slideTags: [],
	slideTag: "",
};

const OPENING_SLIDESHOW_STATE = {
	opening: "",
	openingImage: "",
	openingImageAlt: "",
	openingImageAttribution: "",
	openingImageAttributionLink: "",
};

const CLOSING_SLIDESHOW_STATE = {
	closing: "",
	closingImage: "",
	closingImageAlt: "",
	closingImageAttribution: "",
	closingImageAttributionLink: "",
};

const INITIAL_SLIDES = [
	{
		value: 5,
		name: "Five",
	},
	{
		value: 10,
		name: "Ten",
	},
	{
		value: 15,
		name: "Fifteen",
	},
	{
		value: 20,
		name: "Twenty",
	},
	{
		value: 25,
		name: "Twenty Five",
	},
	{
		value: 30,
		name: "Thirty",
	},
	{
		value: 35,
		name: "Thirty Five",
	},
	{
		value: 40,
		name: "Forty",
	},
	{
		value: 50,
		name: "Fifty",
	},
];

const INITIAL_SLIDES_STATE = {
	slidePosition: "",
	slideImage: "",
	slideImageAttribution: "",
	slideImageAttributionLink: "",
	slideImageAlt: "",
	slideComment: "",
};

const requiredValues = [
	"title",
	"slideTitle",
	"blurb",
	"slideUrl",
	"metaTag",
	"headlineImageAlt",
];

export {
	INITIAL_SLIDESHOW_DETAILS,
	INITIAL_SLIDES,
	INITIAL_SLIDES_STATE,
	OPENING_SLIDESHOW_STATE,
	CLOSING_SLIDESHOW_STATE,
	requiredValues,
};
