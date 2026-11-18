import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロム"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		644
	],
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
	retreat: 2
}

export default card
