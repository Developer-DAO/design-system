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
	title: "1.Tokens/Typography",
};

export const TypographyShowcase = () => (
	<div className="space-y-6 p-8 text-white">
		<Headline1>Headline 1</Headline1>
		<p className="text-neutral-600 w-2/3">
			This is typically the largest text on the page, used for the main title or heading of a
			section or page. It should be used sparingly, primarily for emphasizing the main content or
			message.
		</p>

		<Headline2>Headline 2</Headline2>
		<p className="text-neutral-600 w-2/3">
			Used for subheadings under Headline 1, it helps establish a hierarchy and guide the reader
			through the content.
		</p>

		<Headline3>Headline 3</Headline3>
		<p className="text-neutral-600 w-2/3">
			This smaller heading font is useful for subsections under Headline 2, adding another layer to
			the textual hierarchy.
		</p>

		<Headline4>Headline 4</Headline4>
		<p className="text-neutral-600 w-2/3">
			Headline 4 can be used for smaller subsections or for highlighting important information
			within a section.
		</p>

		<HeadlineBasic>Headline Basic</HeadlineBasic>
		<p className="text-neutral-600 w-2/3">
			This basic headline is versatile and can be used where a standard headline style is
			appropriate, such as in widgets or informational boxes.
		</p>

		<BodyHeadline>Body Headline</BodyHeadline>
		<p className="text-neutral-600 w-2/3">
			The Body Headline is used for introducing the main content. It acts as a transition between
			the headings and the body text, often summarizing or providing context.
		</p>

		<Body1>Body 1 - Regular text</Body1>
		<p className="text-neutral-600 w-2/3">
			This is the standard body text size, used for the main content of the page. It should be
			legible and comfortable to read for extended periods.
		</p>

		<Body2>Body 2 - Smaller text</Body2>
		<p className="text-neutral-600 w-2/3">
			Body 2 is smaller than the regular body text and can be used for less important information,
			captions, or secondary content.
		</p>

		<Body3>Body 3 - Even smaller text</Body3>
		<p className="text-neutral-600 w-2/3">
			This smallest body text is used sparingly for tertiary content such as footnotes, disclaimers,
			or copyright notices.
		</p>
	</div>
);
