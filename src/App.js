import Button from "./Button";

function App() {
	return (
		<div className="font-['Ubuntu_Mono'] p-20">
			<h1 className="font-['Poppins'] text-2xl font-medium mb-8">Buttons</h1>
			<div className="flex flex-col gap-11">
				<div className="grid grid-cols-[repeat(2,_300px)] gap-10	">
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button /&gt;</p>
						<Button>Default</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#828282]">&:hover &:focus</p>
						<Button ishover={true}>Default</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button variant="outline" /&gt;</p>
						<Button variant="outline">Default</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#828282]">&:hover &:focus</p>
						<Button variant="outline" ishover={true}>
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button variant="text" /&gt;</p>
						<Button variant="text">Default</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#828282]">&:hover &:focus</p>
						<Button variant="text" ishover={true}>
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button disableShadow /&gt;</p>
						<Button disableShadow color="primary">
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start"></div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button disabled /&gt;</p>
						<Button disabled>Disabled</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button variant="text" disabled /&gt;</p>
						<Button variant="text" disabled>
							Disabled
						</Button>
					</div>
				</div>
				<div className="flex gap-28">
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button startIcon="shopping_cart" /&gt;</p>
						<Button startIcon="shopping_cart" color="primary">
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button endIcon="add_shopping_cart" /&gt;</p>
						<Button endIcon="add_shopping_cart" color="primary">
							Default
						</Button>
					</div>
				</div>
				<div className="grid grid-cols-[repeat(4,_250px)] gap-10	">
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button size="sm" /&gt;</p>
						<Button size="sm" color="primary">
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button size="md" /&gt;</p>
						<Button size="md" color="primary">
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button size="lg" /&gt;</p>
						<Button size="lg" color="primary">
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start"> </div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button color="default" /&gt;</p>
						<Button color="default">Default</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button color="primary" /&gt;</p>
						<Button color="primary">Default</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button color="secondary" /&gt;</p>
						<Button color="secondary">Secondary</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#333333]">&lt;Button color="danger" /&gt;</p>
						<Button color="danger">Danger</Button>
					</div>
					<div className="flex flex-col gap-3 items-start">
						<p className="text-[#828282]">&:hover &:focus</p>
						<Button color="default" ishover={true}>
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start justify-end">
						<p className="text-[#828282]"></p>
						<Button color="primary" ishover={true}>
							Default
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start justify-end">
						<p className="text-[#828282]"></p>
						<Button color="secondary" ishover={true}>
							Secondary
						</Button>
					</div>
					<div className="flex flex-col gap-3 items-start justify-end">
						<p className="text-[#828282]"></p>
						<Button color="danger" ishover={true}>
							Danger
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
