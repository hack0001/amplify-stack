const headlineImage = {
	name: "headlineImage",
	type: "image",
};

const devCheckBox = {
	id: "Development",
	placeholder: "Development",
	type: "checkBox",
	name: "development",
	width: "5%",
	layout: "inline-block",
};
const prodCheckBox = {
	id: "Production",
	placeholder: "Production",
	type: "checkBox",
	name: "production",
	width: "5%",
	layout: "inline-block",
};

const originalBox = {
	id: "Original",
	placeholder: "Original",
	type: "checkBox",
	name: "original",
	width: "5%",
	layout: "inline-block",
};
const authorName = {
	id: "AuthorName",
	placeholder: "Author Name",
	type: "textField",
	name: "authorName",
	width: "45%",
	layout: "inline-block",
};

const originDiff = {
	id: "Difference",
	placeholder: "Difference From Origin",
	type: "textField",
	name: "difference",
	width: "95%",
	layout: "inline-block",
};

const title = {
	id: "title",
	name: "title",
	placeholder: "Quiz Title",
	type: "textField",
	width: "95%",
	layout: "inline-block",
};
const headlineImageAlt = {
	id: "headlineImageAlt",
	name: "headlineImageAlt",
	placeholder: "Alt",
	type: "textField",
	width: "45%",
	layout: "inline-block",
};
const headlineImageAttribution = {
	id: "headlineImageAttribution",
	name: "headlineImageAttribution",
	placeholder: "Image Attribution",
	type: "textField",
	width: "45%",
	layout: "inline-block",
};
const headlineImageAttributionLink = {
	id: "headlineImageAttributionLink",
	name: "headlineImageAttributionLink",
	placeholder: "Attribution Link",
	type: "textField",
	width: "45%",
	layout: "inline-block",
};
const blurb = {
	id: "blurb",
	name: "blurb",
	placeholder: "Quiz Blurb",
	type: "textField",
	width: "95%",
	layout: "inline-block",
};

const comments = {
	id: "NumberScoreComments",
	placeholder: "Number of Score Comments",
	type: "selection",
	name: "numScoreComments",
	width: "25%",
	layout: "inline-block",
	helper: "Enter Number of Score Comments",
	selectVals: [
		{
			name: 1,
			type: 1,
			desc: "One",
		},
		{
			name: 2,
			type: 2,
			desc: "Two",
		},
		{
			name: 3,
			type: 3,
			desc: "Three",
		},
		{
			name: 4,
			type: 4,
			desc: "Four",
		},
		{
			name: 5,
			type: 5,
			desc: "Five",
		},
	],
};
const scoreComments = {
	id: "ScoreComments",
	type: "scoreComments",
	schema: {
		id: "Score Comment",
		placeholder: "Score Comment",
		type: "textField",
		name: "scoreComment",
		width: "95%",
		layout: "block",
		helper: "Enter Score Comment",
	},
};
const quizUrl = {
	id: "quizUrl",
	name: "quizUrl",
	placeholder: "Quiz Url",
	type: "textField",
	width: "45%",
	layout: "inline-block",
};
const metaTag = {
	id: "metaTag",
	name: "metaTag",
	placeholder: "Quiz Meta Tag",
	type: "textField",
	width: "95%",
	layout: "inline-block",
};
const quizTitle = {
	id: "quizTitle",
	name: "quizTitle",
	placeholder: "Quiz Title",
	type: "textField",
	width: "95%",
	layout: "inline-block",
};

const longUrl = {
	id: "LongUrl",
	placeholder: "Long Url",
	type: "textField",
	name: "longUrl",
	width: "30%",
	layout: "inline-block",
};
const longMobileUrl = {
	id: "LongMobileUrl",
	placeholder: "Long Mobile Url",
	type: "textField",
	name: "longMobileUrl",
	width: "30%",
	layout: "inline-block",
};
const shareCount = {
	id: "ShareCount",
	placeholder: "Share Count",
	type: "textField",
	name: "shareCount",
	width: "30%",
	layout: "inline-block",
};
const shortUrl = {
	id: "ShortUrl",
	placeholder: "Short Url",
	type: "textField",
	name: "shortUrl",
	width: "30%",
	layout: "inline-block",
};
const shortMobileUrl = {
	id: "ShortMobileUrl",
	placeholder: "Short Mobile Url",
	type: "textField",
	name: "shortMobileUrl",
	width: "30%",
	layout: "inline-block",
};

const quizTag = {
	id: "quizTag",
	name: "quizTag",
	placeholder: "Quiz Tags",
	type: "tags",
	tagArray: "quizTags",
	width: "95%",
	layout: "inline-block",
};

export {
	headlineImage,
	devCheckBox,
	prodCheckBox,
	originalBox,
	title,
	originDiff,
	headlineImageAlt,
	headlineImageAttribution,
	headlineImageAttributionLink,
	blurb,
	comments,
	scoreComments,
	quizUrl,
	metaTag,
	quizTitle,
	authorName,
	longUrl,
	longMobileUrl,
	shareCount,
	shortUrl,
	shortMobileUrl,
	quizTag,
};
