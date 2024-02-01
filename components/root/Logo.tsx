"use client";
import type { RootState } from "@/lib/Store";
import { useSelector } from "react-redux";
import { TooltipComp } from "../Editors/Tooltip";
import LogoEditor from "../Editors/LogoEditor";

function Logo({ className }: { className: string }) {
	const value = useSelector((state: RootState) => state.logo.value);

	return (
		<div className="w-full flex">
			<h2 className={`text-4xl  font-extrabold ${className} cursor-pointer`}>
				{value}
				<TooltipComp text="עריכת טקסט">
					<LogoEditor />
				</TooltipComp>
			</h2>
		</div>
	);
}

export default Logo;
