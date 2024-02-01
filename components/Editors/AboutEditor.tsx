"use client";

import { AboutSlice, editAbout } from "@/lib/Features/About/AboutSlice";
import { RootState } from "@/lib/Store";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { TooltipComp } from "./Tooltip";

type EditComponentProps<T> = {
	slice: string;
	elemName: keyof AboutSlice<T>
    textArea?: boolean
};

const AboutEditor = <T,>({ slice, elemName, textArea }: EditComponentProps<T>) => {
	const dispatch = useDispatch();
	const value = useSelector(
		(state: RootState) => (state.about[elemName] as { value: string }).value
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
                        אודותינו
                    </Label>
					{!textArea ? (
                    <Input
						onChange={(e) =>
							dispatch(
								editAbout({ sectionName: elemName, value: e.target.value })
							)
						}
						type="text"
						defaultValue={value}>
                        </Input>
                    ): <Textarea
						onChange={(e) =>
							dispatch(
								editAbout({ sectionName: elemName, value: e.target.value })
							)
						}
						cols={5}
                        rows={10}
						defaultValue={value}>
                        </Textarea>}
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default AboutEditor;
