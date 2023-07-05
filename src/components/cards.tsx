import { Discord } from "types";
import discords from "../../discords.json";
import { Reorder, motion } from "framer-motion";
import { Server } from "lucide-react";
import clsx from "clsx";

const categoriesToColorsMap = {
	"Communities & Subreddits": "bg-blue-500",
	"Frameworks, Languages & Libraries": "bg-green-500",
	"Component Libraries": "bg-yellow-500",
	Tooling: "bg-red-500",
	"Machine Learning": "bg-purple-500",
	Conferences: "bg-pink-500",
	Other: "bg-gray-500",
};

function stringMarkdownLinkToHtmlLink(str: string) {
	if (!str.includes("[")) return str;

	const [text, link] = str.split("](");

	return (
		<a
			className="text-primary hover:underline"
			href={link.replace(")", "")}
		>
			{text.replace("[", "")}
		</a>
	);
}

export default function Cards({
	items,
	setItems,
}: {
	items: Discord[];
	setItems: (v: Discord[]) => void;
}): JSX.Element {
	return (
		<Reorder.Group
			className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto max-w-[1200px]"
			values={discords}
			onReorder={setItems}
		>
			{items.map((discord) => (
				<Reorder.Item
					draggable={false}
					key={discord.name}
					value={discord}
				>
					<motion.a
						draggable={false}
						href={discord.link}
						target="_blank"
						rel="noopener noreferrer"
						className={clsx(
							"bg-white h-full p-8 drop-shadow-xl rounded-lg flex flex-col transition-all hover:shadow",
							"hover:-translate-y-1"
						)}
						key={discord.name}
					>
						<div className="flex items-center space-x-2 mb-2">
							<Server className="text-gray-800" />
							<h4 className="font-semibold">
								{stringMarkdownLinkToHtmlLink(discord.name)}
							</h4>
						</div>
						<p>{discord.description}</p>

						<div className="flex items-center pt-4 space-x-2 text-xs mt-auto">
							<div
								className={clsx(
									"h-4 w-4 rounded-full",
									// @ts-ignore
									categoriesToColorsMap[discord.category]
								)}
							/>
							<span>{discord.category}</span>
						</div>
					</motion.a>
				</Reorder.Item>
			))}
			{items.length === 0 && (
				<motion.div className="col-span-full text-center">
					<h5>No results found.</h5>
				</motion.div>
			)}
		</Reorder.Group>
	);
}
