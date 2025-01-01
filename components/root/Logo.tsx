function Logo({ className }: { className: string }) {
	return (
		<div className="w-fit flex">
			<p className={`text-4xl  font-extrabold ${className} cursor-pointer`}>
				LOGO
			</p>
		</div>
	);
}

export default Logo;
