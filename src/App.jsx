import "./App.css";
import SideOnSpan from "./components/sideon";
import { actions } from "./lib/store"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"

function App() {
	const sideOn = useSelector((state) => state.sideOn)
	const orders = useSelector((state) => state.orders)
	const averageTime = useSelector((state) => state.mfyTime)

	const dispatch = useDispatch()

	const toggleSide = () => {
		dispatch(actions.toggleSide())
	}
	const serveOrder = () => {
		const servedOrder = orders[0]
		if (servedOrder === undefined) return;
		const timeServed = (Date.now()) / 1000 - servedOrder.timeGenerated
		dispatch(actions.setMfy(Math.floor(timeServed)))
		dispatch(actions.serveOrder())
		dispatch(actions.pushOrder())
	}
	const addOrder = () => {
		dispatch(actions.pushOrder())
	}


	useEffect(() => {
		window.addEventListener("keypress", (event) => {
			if (event.key === "p") toggleSide();
			if (event.key === "Enter") serveOrder();
			if (event.key === "o") addOrder();
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
