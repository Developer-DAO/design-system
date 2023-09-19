import React from "react";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";
import BodyHeadline from "./BodyHeadline";
import Headline1 from "./Headline1";
import Headline2 from "./Headline2";
import Headline3 from "./Headline3";
import Headline4 from "./Headline4";
import HeadlineBasic from "./HeadlineBasic";

export default {
	title: "Typography",
};

export const TypographyShowcase = () => (
	<div className="space-y-6 p-8 text-white">
		<Headline1>Headline 1</Headline1>
		<Headline2>Headline 2</Headline2>
		<Headline3>Headline 3</Headline3>
		<Headline4>Headline 4</Headline4>
		<HeadlineBasic>Headline Basic</HeadlineBasic>
		<BodyHeadline>Body Headline</BodyHeadline>
		<Body1>Body 1 - Regular text</Body1>
		<Body2>Body 2 - Smaller text</Body2>
		<Body3>Body 3 - Even smaller text</Body3>
		<Body3>Body 3 - Even smaller text</Body3>
	</div>
);
