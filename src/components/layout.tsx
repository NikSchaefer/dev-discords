import { cn } from "@lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main
			className={cn(
				"bg-gradient-to-br from-[#232838] to-[#231c66]",
				"text-white font-inter min-h-screen"
			)}
		>
			{children}
		</main>
	);
}
