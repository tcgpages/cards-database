import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "回収ネット"
	},
	rarity: "Uncommon",
	illustrator: "Ryo Ueda",
	category: "Trainer",
	trainerType: "Item",
	effect: {
		ja: "自分のポケモン（「ポケモンV・GX」をのぞく）を1匹選び、手札にもどす。（ポケモン以外のカードは、すべてトラッシュする。）"
	},
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
