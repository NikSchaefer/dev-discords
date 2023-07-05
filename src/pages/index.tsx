import Cards from "@components/cards";
import Layout from "@components/layout";
import clsx from "clsx";
import { motion } from "framer-motion";
import { Command, SearchCode } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import discords from "../../discords.json";
import { Discord } from "types";

const categories = [
	"All",
	"Communities & Subreddits",
	"Frameworks, Languages & Libraries",
	"Component Libraries",
	"Tooling",
	"Machine Learning",
	"Conferences",
	"Other",
];

export default function Home(): JSX.Element {
	const [values, setValues] = useState<Discord[]>(discords);
	const [search, setSearch] = useState("");

	const [category, setCategory] = useState(categories[0]);
	const searchRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (search.length === 0) return setValues(discords);

		const filtered = discords.filter((discord) =>
			discord.name.toLowerCase().includes(search.toLowerCase())
		);

		setValues(filtered);
	}, [search]);

	useEffect(() => {
		if (category === "All") return setValues(discords);

		const filtered = discords.filter(
			(discord) => discord.category === category
		);

		setValues(filtered);
	}, [category]);

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "/" && e.ctrlKey && searchRef.current) {
				e.preventDefault();
				searchRef.current.focus();
			}
		});

		return () => document.removeEventListener("keydown", () => {});
	}, []);

	return (
		<Layout>
			<section className="pt-[5em] mx-auto max-w-[1000px] w-[90%]">
				<a
					href="https://github.com/NikSchaefer/dev-discords"
					className="absolute transition-all left-0 top-0 m-2 rotate-[135deg] rounded-full hover:rotate-[145deg]"
				>
					<img src="/github.svg" className="w-16 h-16" />
				</a>
				<motion.h1
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}
					viewport={{ once: true }}
					className={clsx(
						"h0 mx-auto font-semibold text-effect text-center",
						"tracking-wider"
					)}
				>
					Developer Discords
				</motion.h1>
				<motion.p
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.3 }}
					viewport={{ once: true }}
					className="mt-[2em] h4 text-center mx-auto w-[90%] max-w-[750px] text-gray-100"
				>
					An online collection of developer related discord servers —
					because programmers need more places to argue about tabs vs.
					spaces.
				</motion.p>
			</section>

			<section className="py-[5em] mx-auto max-w-[1000px] w-[90%]">
				<motion.div className="relative">
					<SearchCode className="absolute top-1/2 -translate-y-1/2 left-5 w-7 h-7" />
					<input
						ref={searchRef}
						id="search"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						type="text"
						placeholder="Search for a discord..."
						className={clsx(
							"bg-none bg-transparent outline-none w-full h-12 text-xl font-semibold placeholder-gray-400",
							"border-8 border-primary-300/10 rounded-3xl px-12 py-8"
						)}
					/>
					<div className="hidden sm:flex absolute top-1/2 items-center -translate-y-1/2 right-6 border-primary-300/30 space-x-2 border-4 p-2 rounded-xl">
						<Command />
						<span className="font-inter text-lg">/</span>
					</div>
				</motion.div>
			</section>

			<section className={clsx("pt-[0.5em] bg-[#f7f8fa] text-black")}>
				<div className="w-[90%] text-xs pb-[3em] mx-auto max-w-[1200px] justify-center flex flex-wrap gap-2 mt-2">
					{categories.map((categoryName) => (
						<button
							key={categoryName}
							onClick={() => setCategory(categoryName)}
							className={clsx(
								"px-4 py-2 rounded-full",
								"text-gray-700 hover:text-black",
								"transition-colors",
								"relative z-20"
							)}
						>
							{categoryName}
							{categoryName === category && (
								<motion.div
									layoutId="underline"
									className={clsx(
										"bg-primary/30 px-4 py-2 rounded-full absolute left-0 top-0 w-full h-full"
									)}
								/>
							)}
						</button>
					))}
				</div>

				<Cards items={values} setItems={setValues} />
			</section>

			<section className={clsx("py-[5em] bg-[#f7f8fa] text-black")}>
				<h5 className="text-center">
					Have a discord to add?{" "}
					<a
						href="https://github.com/NikSchaefer/dev-discords"
						className="text-primary-500 hover:underline"
					>
						Submit it here
					</a>
				</h5>
			</section>
			<section className={clsx("py-[5em] ")}>
				<h5 className="text-center">
					⭐ on{" "}
					<a
						href="https://github.com/NikSchaefer/dev-discords"
						className="text-primary-500 hover:underline"
					>
						GitHub
					</a>{" "}
					⋅ Made with ❤️ by{" "}
					<a
						href="https://nikschaefer.com"
						className="text-primary-500 hover:underline"
					>
						Nik Schaefer
					</a>{" "}
					⋅ Original data by{" "}
					<a
						href="https://github.com/ljosberinn/awesome-dev-discord"
						className="text-primary-500 hover:underline"
					>
						Gerrit Alex
					</a>{" "}
					📊
				</h5>
			</section>
		</Layout>
	);
}
