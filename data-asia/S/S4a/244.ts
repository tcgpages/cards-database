import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "パッチラゴン"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 160,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		880
	],
	description: {
		ja: "古代では たくましい 下半身で 無敵だったが 餌の 植物を 食べつくしてしまい 絶滅した。"
	},
	attacks: [
		{
			name: {
				ja: "アッパーでんりゅう"
			},
			effect: {
				ja: "次の自分の番、このポケモンの「アッパーでんりゅう」のダメージは「+90」される。"
			},
			cost: [
				"Lightning"
			],
			damage: 30
		},
		{
			name: {
				ja: "ギガインパクト"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 200
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 4,
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
