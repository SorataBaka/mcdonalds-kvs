import "./App.css";
import { useEffect, useState } from "react";
import generateOrder from "./lib/generateorder";
import SideOnSpan from "./components/sideon";

function App() {
	const [averageTime, setAverageTime] = useState(120)
	const [sideOn, setSideOn] = useState(false)
	const [orders, setOrders] = useState([
		generateOrder(),
		generateOrder(),
		generateOrder(),
		generateOrder(),
		generateOrder(),
		generateOrder(),
		generateOrder(),
	])
	const pushOrder = () => {
		if (!sideOn) return
		if (orders.length > 7) return
		orders.push(generateOrder())
		setOrders(orders)
		const generatetime = Math.floor(Math.random() * (15000) + 5000);
		
	}
	useEffect(() => {
		
		window.addEventListener("keypress", (event) => {
			if (event.key === "p") {
				setSideOn(current => !current);
			}
			if (event.key === "Enter") {
				const currentOrder = orders[0]
				const timeTaken = Math.floor((Date.now() / 1000)) - currentOrder.timeGenerated;
				setAverageTime(timeTaken);
				orders.shift()
				setOrders(orders);
			}
		})
		//eslint-disable-next-line
	}, [])

	return (
		<>
			<div className="h-screen w-screen flex flex-col align-middle justify-between bg-black">
				<div className="min-h-[90vh] flex flex-row flex-wrap">
					{orders.map((orderObject, index) => {
						if (index === 0) return <div key={index} className="border-[6px] border-green-400 flex flex-col flex-wrap align-top bg-white w-[20rem] m-2 h-min">
							<div className="bg-purple-900 text-white font-bold text-xl flex flex-row align-middle justify-between px-5">
								<h1>Side →</h1>
								<h1>{orderObject.orderType}</h1>
								<h1>{orderObject.randomCode}</h1>
							</div>
							{orderObject.orderArray.map((orderList, index) => {
								return <span key={index} className="text-xl font-semibold px-5"><span>{orderList.amount}</span>  {orderList.name}</span>
							})}
							<div className="bg-red-400 text-white font-bold text-xl px-2 flex flex-row align-middle justify-between">
								<h1>{orderObject.orderStorage}</h1>
								<h1>{orderObject.randomTime}</h1>
							</div>
						</div>
						return <div key={index} className="flex flex-col flex-wrap align-top bg-white w-[20rem] m-2 h-min">
							<div className="bg-purple-900 text-white font-bold text-xl flex flex-row align-middle justify-between px-5">
								<h1>Side →</h1>
								<h1>{orderObject.orderType}</h1>
								<h1>{orderObject.randomCode}</h1>
							</div>
							{orderObject.orderArray.map((orderList, index) => {
								return <span key={index} className="text-xl font-semibold px-5"><span>{orderList.amount}</span>  {orderList.name}</span>
							})}
							<div className="bg-red-400 text-white font-bold text-xl px-2 flex flex-row align-middle justify-between">
								<h1>{orderObject.orderStorage}</h1>
								<h1>{orderObject.randomTime}</h1>
							</div>
						</div>
					})}
				</div >
				<footer className=" flex flex-row align-middle justify-between text-xl pr-2">
					<span className="text-black font-extrabold bg-gray-500 text-2xl">{new Date().toLocaleTimeString()}</span>
					<span className="text-white">Standard/MFY {SideOnSpan(sideOn)}</span>
					<span className="text-white">{averageTime} / 120</span>
				</footer>
			</div>
		</>
	);
}

export default App;
