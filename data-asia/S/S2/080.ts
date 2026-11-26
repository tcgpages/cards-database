import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ハトーボー"
	},
	rarity: "Common",
	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 80,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	dexId: [
		520
	],
	description: {
		ja: "空を飛ぶ 速さは そこそこ。 どんな 遠く 離れても 主と 自分の 巣を 憶えている。"
	},
	attacks: [
		{
			name: {
				ja: "するどいはね"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "かぜおこし"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "マメパト"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "－30"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
