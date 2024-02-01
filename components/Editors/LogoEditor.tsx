"use client";

import { LogoSlice, editLogo } from "@/lib/Features/Logo/LogoSlice";
import { RootState } from "@/lib/Store";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { TooltipComp } from "./Tooltip";

type EditComponentProps<T> = {
	elemName?: keyof LogoSlice<T>
};

const LogoEditor = <T,>({ elemName }: EditComponentProps<T>) => {
	const dispatch = useDispatch();
	const value = useSelector(
		(state: RootState) => state.logo.value
	);

	return (
		<Popover>
			<TooltipComp text="עריכת טקסט">
				<PopoverTrigger asChild>
					<Button className="p-1" variant="link">
						<FaEdit />
					</Button>
				</PopoverTrigger>
			</TooltipComp>
			<PopoverContent className="w-80">
				<div>
					<Label>
                        לוגו
                    </Label>
                    <Input
						onChange={(e) =>
							dispatch(
								editLogo(`${e.target.value}`)
							)
						}
						type="text"
						defaultValue={value}>
                        </Input>
                    
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default LogoEditor;
