import Image from "next/image";

export default function Home() {
	return (
		<>
			<h1>I am Greatness</h1>
			<p>
				Hello, my name is <b>Greatness Abolade.</b>
			</p>
			<p>
				I love drinking H<sub>2</sub>0 and I <i>breathe</i> in O<sup>2</sup>
			</p>
			<p>
				Print this page by pressing <kbd>ctrl + p</kbd> on your keyboard
			</p>
			<p>
				Gretness loves coding in{" "}
				<pre>
					<code>html, css, javascript, react, next.js</code>
				</pre>
			</p>
			<p>
				I really really so much hate Tinubu of <abbr title="All Progressive Congress">APC</abbr>
			</p>
			<p>
				I live at <address>No.10, Jidetilowo street, off Munachimso busttop, United Kingom, Akure.</address>
			</p>

			<p>
				<bdo dir="ltr">This is a left to riht and can be a right to left</bdo>
			</p>
		</>
	);
}
