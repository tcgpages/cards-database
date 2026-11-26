import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ドリュウズEX"
	},
	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		530
	],
	hp: 180,
	types: [
		"Fighting"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "ディグアウト"
			},
			effect: {
				ja: "自分の山札を上から1枚トラッシュし、そのカードが基本エネルギーなら、自分のポケモンにつける。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "グラウンドブレイク"
			},
			effect: {
				ja: "自分のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Lightning",
			value: "－20"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "holo"
		}
	]
}

export default card
