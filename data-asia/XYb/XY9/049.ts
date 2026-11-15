import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "フカマル"
	},
	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		443
	],
	description: {
		ja: "洞窟の 小さな 横穴を ねぐらにする。 獲物が 近づくと 素早く 飛び出して 捕まえる。"
	},
	attacks: [
		{
			name: {
				ja: "よくばる"
			},
			effect: {
				ja: "自分の手札を1枚選び、トラッシュする。その後、自分の山札を2枚引く。"
			},
			cost: [
				"Fighting"
			]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
