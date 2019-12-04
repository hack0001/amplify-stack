import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import _ from "lodash";
import SlideCard from "./slides/slideCard";
import { slideStyles } from "../styles/slideStyles";
import TabContainer from "../../tabContainer/tabContainer";
import OpeningClose from "./openCloseSlide/openingClosingSlide";
import {
	openingSlidesLayout,
	closingSlidesLayout,
} from "./layout/openingSlideLayout";
import { slideLayout } from "./layout/slidesLayout";

const Slides = props => {
	const [tab, setTab] = useState(0);
	const { classes, numberSlides, slides, handleSend } = props;
	const slidesArray = _.range(numberSlides).map((val, index) => {
		return { ...slides.slides[0], slidePosition: index + 1 };
	});
	slidesArray.unshift(slides.opening[0]);
	slidesArray.push(slides.closing[0]);

	const slidesTitle = _.reduce(
		_.range(numberSlides + 2),
		(running, value) => {
			const title =
				value === 0
					? `Opening Slide`
					: value === slidesArray.length - 1
					? `Closing Slide`
					: `Slide ${value}`;
			running.push({
				title,
			});
			return running;
		},
		[],
	);

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Tabs
					value={tab}
					onChange={(e, value) => {
						setTab(value);
					}}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
				>
					{slidesTitle.map((tab, index) => {
						return <Tab label={`${tab.title}`} key={index} />;
					})}
				</Tabs>
			</AppBar>

			{slidesArray.map((slide, index) => {
				if (tab === index) {
					if (index === 0) {
						return (
							<TabContainer key={index}>
								<OpeningClose
									handleSend={handleSend}
									layout={openingSlidesLayout}
									data={slide}
									allData={slides}
									open={true}
									currentTab={tab}
									setNewTab={setTab}
								/>
							</TabContainer>
						);
					} else if (index === slidesArray.length - 1) {
						return (
							<TabContainer key={index}>
								<OpeningClose
									handleSend={handleSend}
									layout={closingSlidesLayout}
									data={slide}
									allData={slides}
									open={false}
									currentTab={tab}
									setNewTab={setTab}
								/>
							</TabContainer>
						);
					} else {
						return (
							<TabContainer key={index}>
								<SlideCard
									handleSend={handleSend}
									slidesLayout={slideLayout}
									data={slide}
									allData={slides}
									currentTab={tab}
									setNewTab={setTab}
								/>
							</TabContainer>
						);
					}
				}
			})}
		</div>
	);
};

Slides.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(slideStyles, { withTheme: true })(Slides);
