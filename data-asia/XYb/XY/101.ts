import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ミルタンク"
	},
	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		241
	],
	description: {
		ja: "子供が 生まれたときに しぼられた ミルクには いつもより 栄養が たっぷり つまっている。"
	},
	attacks: [
		{
			name: {
				ja: "ひゃくにんりき"
			},
			effect: {
				ja: "自分のベンチに2進化ポケモンがいるなら、70ダメージを追加。"
			},
			cost: [
				"Colorless"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "ぶちかます"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
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
