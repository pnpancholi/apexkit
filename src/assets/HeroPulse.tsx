import { useEffect, useState } from "react";

const WORDS = ["developers.", "hackers.", "builders."];

const ANIMATION_CLASSES = {
	INITIAL: "opacity-100 translate-y-0 translate-z-0 rotate-x-0",
	// Exit: Flip up and out, blur for motion, fast fade out
	EXIT: "opacity-0 -translate-y-2 [transform:rotateX(90deg)] blur-sm transition-all duration-500 ease-in",
	// Reset: Instant snap to bottom position, hidden, ready to enter
	RESET:
		"opacity-0 translate-y-2 [transform:rotateX(-90deg)] delay-0 duration-0 transition-none",
	// Enter: Flip up and in, snap bounce effect
	ENTER:
		"opacity-100 translate-y-0 [transform:rotateX(0deg)] blur-0 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]",
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function HeroPulse() {
	const [index, setIndex] = useState(0);
	const [fadeProp, setFadeProp] = useState(ANIMATION_CLASSES.INITIAL);

	useEffect(() => {
		let mounted = true;

		const animateWords = async () => {
			// Loop forever while component is mounted
			while (mounted) {
				// Wait reading time
				await delay(2500);
				if (!mounted) break;

				// 1. Exit Animation
				setFadeProp(ANIMATION_CLASSES.EXIT);
				await delay(500); // Wait for exit transition
				if (!mounted) break;

				// 2. Data Update & Position Reset (Instant)
				setIndex((prev) => (prev + 1) % WORDS.length);
				setFadeProp(ANIMATION_CLASSES.RESET);

				// Small delay to ensure DOM updates before triggering enter
				await delay(50);
				if (!mounted) break;

				// 3. Enter Animation
				setFadeProp(ANIMATION_CLASSES.ENTER);
			}
		};

		animateWords();

		return () => {
			mounted = false;
		};
	}, []);

	return (
		<div className="inline-block min-w-[360px] whitespace-nowrap [perspective:1000px] align-middle">
			<span
				className={`block font-mono text-accent transform-gpu origin-bottom ${fadeProp}`}
			>
				{WORDS[index]}
			</span>
		</div>
	);
}
