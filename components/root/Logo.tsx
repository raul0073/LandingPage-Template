"use client";
import type { RootState } from "@/lib/Store";
import { useSelector } from "react-redux";

function Logo({ className }: { className: string }) {
	const value = useSelector((state: RootState) => state.logo.value);

	return (
		<div className="w-full flex">
			<h2 className={`text-4xl  font-extrabold ${className} cursor-pointer`}>
				{value}
			</h2>
        
      
		</div>
	);
}

export default Logo;
