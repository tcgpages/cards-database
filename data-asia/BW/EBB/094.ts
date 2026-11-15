import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		643
	],
	hp: 130,
	types: [
		"Fire"
	],
	stage: "Basic",
	description: {
		ja: "神話に 登場する ポケモン。 しっぽから 炎を 吹き上げて すべての ものを 焼きつくす。"
	},
	attacks: [
		{
			name: {
				ja: "げきりん"
			},
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "あおいほのお"
			},
			effect: {
				ja: "このポケモンについている炎エネルギーを2個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Fire",
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
	retreat: 2,
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
