import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロム"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		644
	],
	hp: 130,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "神話に 登場する ポケモン。 しっぽの 中に 電気を 作る 巨大な 発電器を 持つ。"
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
				ja: "らいげき"
			},
			effect: {
				ja: "このポケモンにも40ダメージ。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: 120
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
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
