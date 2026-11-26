import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "レシラム"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		643
	],
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
				ja: "このポケモンについている[炎]エネルギーを2個選び、トラッシュする。"
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
	retreat: 2
}

export default card
