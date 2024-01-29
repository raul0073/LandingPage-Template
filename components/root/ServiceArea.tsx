"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

function ServiceArea() {
	return (
		<section id="#contact" className="serviceAre w-full flex flex-col bg-primary-foreground min-h-[60vh] p-8 items-center justify-center">
			<motion.div
				initial={{ x: -50 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.4 }}
				className="flex">
				<h2 className="header text-4xl font-bold text-foreground mb-4 text-gray-500">
					דברו איתנו
				</h2>
			</motion.div>

			<motion.div
				initial={{ x: 50 }}
				whileInView={{ x: 0 }}
				transition={{ duration: 0.4 }}
				className="w-[90%] flex flex-col lg:flex-row lg:w-1/2 justify-evenly">
				<Card className="w-full">
						<CardHeader className="w-full p-8">
							<CardTitle className="text-center">השאירו פרטים ונחזור אליכם בהקדם</CardTitle>
							<CardContent className="w-full lg:1/2">
              <div className="my-4" id="contact">
              								<Label>שם מלא</Label>
								<Input
									placeholder="אהרון אהרון"
									type="text"
									min={3}
									max={20}></Input>
              </div>
              <div className="my-4">
								<Label>כתובת מייל</Label>
								<Input
									placeholder="aharon@gmail..."
									type="email"
									max={50}></Input>
              </div>
              <div className="my-4">
								<Label>טלפון</Label>
								<Input
									placeholder="05012345... "
									type="phone"
									min={10}
									max={10}></Input>
              </div>
              <div className="my-4">
								<Label>טקסט חופשי</Label>
								<Textarea
									cols={6}
                  rows={4}
                  placeholder="קצר וקולע"
                  >
                  </Textarea>
              </div>
							</CardContent>
						</CardHeader>
					<CardFooter className="flex justify-end">
            <Button>שלח </Button>
          </CardFooter>
				</Card>
			</motion.div>
		</section>
	);
}

export default ServiceArea;
