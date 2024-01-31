"use client";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { RootState } from "@/lib/Store";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui/input";
import { edit } from "../../lib/Features/Logo/LogoSlice";
import { Label } from "../ui/label";
import { editHero } from "@/lib/Features/Hero/HeroSlice";
import Draggable from "react-draggable";

export function PopoverEdit() {
	const logo = useSelector((state: RootState) => state.logo.value);
	const logoInit = useSelector((state: RootState) => state.logo.init);
	const header = useSelector((state: RootState) => state.hero.header.value);
	const sub = useSelector((state: RootState) => state.hero.sub.value);
	const btn1 = useSelector((state: RootState) => state.hero.btn1.value);
	const btn2 = useSelector((state: RootState) => state.hero.btn2.value);
	const dispatch = useDispatch();
	return (
		<div>
			<AlertDialog>
				<AlertDialogTrigger asChild>
					<FaEdit className="cursor-pointer text-2xl hover:text-primary" />
				</AlertDialogTrigger>
				<Draggable>
					<AlertDialogContent>
						<AlertDialogHeader>
							<AlertDialogTitle className="text-right">
								עריכת תוכן
							</AlertDialogTitle>
							<AlertDialogDescription className="text-right">
								<Label>לוגו</Label>
								<Input
									type="text"
									max={10}
									placeholder="עד 10 תווים"
									defaultValue={logo}
									onChange={(e) => dispatch(edit(e.target.value))}></Input>
								<Label>כותרת ראשית</Label>
								<Input
									type="text"
									max={10}
									placeholder="עד 10 תווים"
									defaultValue={header}
									onChange={(e) =>
										dispatch(
											editHero({ sectionName: "header", value: e.target.value })
										)
									}></Input>
								<Label>טקסט מודגש</Label>
								<Input
									type="text"
									max={10}
									placeholder="עד 10 תווים"
									defaultValue={sub}
									onChange={(e) =>
										dispatch(
											editHero({ sectionName: "sub", value: e.target.value })
										)
									}></Input>
								<Label>כפתורים</Label>
								<Input
									type="text"
									max={10}
									placeholder="עד 10 תווים"
									defaultValue={btn1}
									onChange={(e) =>
										dispatch(
											editHero({ sectionName: "btn1", value: e.target.value })
										)
									}></Input>
								<Input
									type="text"
									max={10}
									placeholder="עד 10 תווים"
									defaultValue={btn2}
									onChange={(e) =>
										dispatch(
											editHero({ sectionName: "btn2", value: e.target.value })
										)
									}></Input>
							</AlertDialogDescription>
						</AlertDialogHeader>
						<AlertDialogFooter>
							<AlertDialogCancel
								onClick={() => {
									dispatch(edit(logoInit));
								}}>
								ביטול
							</AlertDialogCancel>
							<AlertDialogAction>שמור</AlertDialogAction>
						</AlertDialogFooter>
					</AlertDialogContent>
				</Draggable>
			</AlertDialog>
		</div>
	);
}
