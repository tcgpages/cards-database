import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "パラレルシティ"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Trainer",
	trainerType: "Stadium",
	effect: {
		ja: "このカードは、上下の向きを選んでから場に出す。こちら側のプレイヤーがベンチに出せるポケモンの数は、3匹になる。（このカードが場に出たとき、ベンチに4匹以上いる場合は、こちら側のプレイヤーが、ベンチが3匹になるまでポケモンをトラッシュする。） このカードは、上下の向きを選んでから場に出す。こちら側のプレイヤーの場の、草炎水ポケモンが使うワザのダメージは、すべて「-20」される。"
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
