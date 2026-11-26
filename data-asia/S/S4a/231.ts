import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "カマスジョー"
	},
	illustrator: "Misa Tsutsui",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	evolveFrom: {
		ja: "サシカマス"
	},
	stage: "Stage1",
	dexId: [
		847
	],
	description: {
		ja: "槍のように 尖った 顎は 鋼の 硬さ。 その 身は 驚くほど 美味しいらしい。"
	},
	attacks: [
		{
			name: {
				ja: "つつく"
			},
			cost: [
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "スクリュージェット"
			},
			effect: {
				ja: "自分の手札から水エネルギーを2枚トラッシュする。2枚トラッシュできないなら、このワザは失敗。"
			},
			cost: [
				"Water"
			],
			damage: 130
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
