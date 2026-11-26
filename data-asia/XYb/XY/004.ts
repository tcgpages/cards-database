import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "イトマル"
	},
	illustrator: "Naoyo Kimura",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		167
	],
	description: {
		ja: "獲物が 近くを 通りかかるまで 自分の 巣で 何日も 同じ 格好で じっと 待ち続ける。"
	},
	attacks: [
		{
			name: {
				ja: "いとをはく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
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
