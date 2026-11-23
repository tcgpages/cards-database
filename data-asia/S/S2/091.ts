import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ダンペイ"
	},
	rarity: "Uncommon",
	illustrator: "Hitoshi Ariga",
	category: "Trainer",
	trainerType: "Supporter",
	effect: {
		ja: "自分の山札を2枚引く。相手プレイヤーとジャンケンをし、自分が勝ったなら、さらに2枚引く。"
	},
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
