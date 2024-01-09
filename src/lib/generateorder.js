const FoodName = [
	"ハンバーガー",
	"エグチ",
	"チーズB",
	"DCB",
	"アブリダブリ",
	"ベーコントマト",
	"チキンフィレ",
	"エビフィレ",
	"BLB",
	"クリスプ",
	"チキチー",
	"TMB",
	"テリCFO",
	"スパビー",
	"スパチキ",
	"BIGMAC",
	"FOF",
];
const OrderType = ["DT", "Bag", "Tray", "MDS"];
const OrderStorage = ["Paid", "Stored"];
function generateNumber() {
	return Math.floor(Math.random() * (16 - 5) + 5);
}
function generateOrder() {
	const duplicateChecker = [];
	const orderAmount = Math.floor(Math.random() * (5 - 1) + 1);
	const orderArray = [];
	for (let i = 0; i < orderAmount; i++) {
		let ItemRandomizer = Math.floor(Math.random() * 16);
		//Prevent duplicate items
		while (duplicateChecker.includes(ItemRandomizer)) {
			ItemRandomizer = Math.floor(Math.random() * 16);
		}
		duplicateChecker.push(ItemRandomizer);

		const singleItemAmount = Math.floor(Math.random() * (4 - 1) + 1);
		orderArray.push({
			name: FoodName[ItemRandomizer],
			amount: singleItemAmount,
		});
	}
	const randomCode = `R${generateNumber()}-${generateNumber()}`;
	const randomTime = Math.floor(Math.random() * (360 - 60) + 60);
	return {
		timeGenerated: Math.floor(Date.now() / 1000),
		randomCode,
		randomTime,
		orderArray,
		orderType: OrderType[Math.floor(Math.random() * 4)],
		orderStorage: OrderStorage[Math.floor(Math.random() * 2)],
	};
}
export default generateOrder;
