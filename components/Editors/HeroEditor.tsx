"use client";

import { editAbout } from "@/lib/Features/About/AboutSlice";
import { HeroSlice, editHero } from "@/lib/Features/Hero/HeroSlice";
import { RootState } from "@/lib/Store";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Textarea } from "../ui/textarea";
import { TooltipComp } from "./Tooltip";

type EditHeroProps<T> = {
	slice: string;
	elemName: keyof HeroSlice<T>
    textArea?: boolean
};

const HeroEditor = <T,>({ slice, elemName, textArea }: EditHeroProps<T>) => {
	const dispatch = useDispatch();
	const value = useSelector(
		(state: RootState) => (state.hero[elemName] as { value: string }).value
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
                        חלק ראשי
                    </Label>
					{!textArea ? (
                    <Input
						onChange={(e) =>
							dispatch(
								editHero({ sectionName: elemName, value: e.target.value })
							)
						}
						type="text"
						defaultValue={value}>
                        </Input>
                    ): <Textarea
						onChange={(e) =>
							dispatch(
								editHero({ sectionName: elemName, value: e.target.value })
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

export default HeroEditor;
