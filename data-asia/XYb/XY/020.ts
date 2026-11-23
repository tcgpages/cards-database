import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシアEX"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Water"
	],
	dexId: [
		471
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "きずにかみつく"
			},
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージを追加。"
			},
			cost: [
				"Water",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "クリスタルレイ"
			},
			effect: {
				ja: "次の相手の番、このポケモンは「進化ポケモン」からワザのダメージを受けない。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
