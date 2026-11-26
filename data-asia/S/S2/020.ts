import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "キャモメ"
	},
	rarity: "Common",
	illustrator: "0313",
	category: "Pokemon",
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		278
	],
	description: {
		ja: "切り立った 崖に 巣を つくり 海風を 利用して 広い空を 上昇し 滑空 するのだ。"
	},
	attacks: [
		{
			name: {
				ja: "もってくる"
			},
			effect: {
				ja: "自分の山札を1枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "スプラッシュ"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: 20
		}
	],
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
