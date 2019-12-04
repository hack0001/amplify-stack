const headlineImage = {
	name: "headlineImage",
	type: "image",
};

const devCheckBox = {
	id: "Development",
	label: "Development",
	type: "checkBox",
	name: "development",
	width: "5%",
	layout: "inline-block",
};
const prodCheckBox = {
	id: "Production",
	label: "Production",
	type: "checkBox",
	name: "production",
	width: "5%",
	layout: "inline-block",
};
const originalBox = {
	id: "Original",
	label: "Original",
	type: "checkBox",
	name: "original",
	width: "5%",
	layout: "inline-block",
};
const instantDevCheck = {
	id: "InstantDevelopmentCheck",
	label: "Instant Development",
	type: "checkBox",
	name: "instantDevelopmentCheck",
	width: "5%",
	layout: "inline-block",
};
const instantPubCheck = {
	id: "InstantPublishCheck",
	label: "Instant Publish Check",
	type: "checkBox",
	name: "instantPublishCheck",
	width: "5%",
	layout: "inline-block",
};
const headline = {
	id: "Headline",
	label: "Headline",
	type: "text",
	name: "headline",
	width: "45%",
	layout: "inline-block",
	gridCol: 1,
};
const kicker = {
	id: "Kicker",
	label: "Kicker",
	type: "text",
	name: "kicker",
	width: "45%",
	layout: "inline-block",
	gridCol: 2,
};
const originDiff = {
	id: "Difference",
	label: "Difference From Origin",
	type: "text",
	name: "difference",
	width: "95%",
	layout: "inline-block",
	gridCol: 2,
};
const articleHeadline = {
	id: "ArticleHeadline",
	label: "Article Headline",
	type: "text",
	name: "articleHeadline",
	width: "95%",
	layout: "inline-block",
	gridCol: 1,
};
const headlineSummary = {
	id: "HeadlineSummary",
	label: "Headline Summary",
	type: "text",
	name: "headlineSummary",
	width: "95%",
	layout: "inline-block",
	gridCol: 1,
};

const bulletHeadline = {
	id: "Bullet Headlines",
	label: "Bullet Headlines",
	type: "select",
	name: "bulletHeadlines",
	width: "25%",
	layout: "inline-block",
	helper: "Enter Number of Bullets",
	values: [
		{
			name: "One",
			type: 1,
			desc: "One",
		},
		{
			name: "Two",
			type: 2,
			desc: "Two",
		},
		{
			name: "Three",
			type: 3,
			desc: "Three",
		},
		{
			name: "Four",
			type: 4,
			desc: "Four",
		},
		{
			name: "Five",
			type: 5,
			desc: "Five",
		},
	],
};
const bullets = {
	id: "Bullets",
	type: "bullets",
	schema: {
		id: "Bullet Headline",
		label: "Bullet Headline",
		type: "text",
		name: "bulletHeadline",
		width: "95%",
		layout: "block",
		helper: "Enter Bullet Headline",
	},
};
const urlDescription = {
	id: "UrlDescription",
	label: "Url Description",
	type: "text",
	name: "urlDescription",
	width: "65%",
	layout: "inline-block",
	gridCol: 2,
};
const authorName = {
	id: "AuthorName",
	label: "Author Name",
	type: "text",
	name: "authorName",
	width: "45%",
	layout: "inline-block",
};

const brief = {
	id: "Brief",
	label: "Brief",
	type: "text",
	name: "brief",
	width: "65%",
	layout: "inline-block",
};

const headlineImageAlt = {
	id: "HeadlineImageAlt",
	label: "Headline Image Alt",
	type: "text",
	name: "headlineImageAlt",
	width: "27%",
	layout: "inline-block",
};
const headlineImageAttribution = {
	id: "HeadlineImageAttribution",
	label: "Headline Image Attribution",
	type: "text",
	name: "headlineImageAttribution",
	width: "27%",
	layout: "inline-block",
};
const headlineImageAttributionLink = {
	id: "HeadlineImageAttributionLink",
	label: "Headline Image Attribution Link",
	type: "text",
	name: "headlineImageAttributionLink",
	width: "27%",
	layout: "inline-block",
};

const longUrl = {
	id: "LongUrl",
	label: "Long Url",
	type: "text",
	name: "longUrl",
	width: "27%",
	layout: "inline-block",
};
const longMobileUrl = {
	id: "LongMobileUrl",
	label: "Long Mobile Url",
	type: "text",
	name: "longMobileUrl",
	width: "27%",
	layout: "inline-block",
};
const shareCount = {
	id: "ShareCount",
	label: "Share Count",
	type: "text",
	name: "shareCount",
	width: "27%",
	layout: "inline-block",
};
const shortUrl = {
	id: "ShortUrl",
	label: "Short Url",
	type: "text",
	name: "shortUrl",
	width: "27%",
	layout: "inline-block",
};
const shortMobileUrl = {
	id: "ShortMobileUrl",
	label: "Short Mobile Url",
	type: "text",
	name: "shortMobileUrl",
	width: "27%",
	layout: "inline-block",
};

const tags = {
	id: "Tags",
	label: "Tags",
	type: "tags",
	name: "tag",
	width: "95%",
	layout: "inline-block",
	tagArray: "tags",
};
export {
	headlineImage,
	devCheckBox,
	prodCheckBox,
	originalBox,
	instantDevCheck,
	instantPubCheck,
	headline,
	kicker,
	originDiff,
	articleHeadline,
	headlineSummary,
	bulletHeadline,
	bullets,
	urlDescription,
	authorName,
	brief,
	headlineImageAlt,
	headlineImageAttribution,
	headlineImageAttributionLink,
	longUrl,
	longMobileUrl,
	shareCount,
	shortUrl,
	shortMobileUrl,
	tags,
};
