import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "アンノーン"
	},
	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		201
	],
	description: {
		ja: "古代文明の 文字に 似ている。 文字が 先か アンノーンが 先か 世界の 七不思議の ひとつ。"
	},
	abilities: [
		{
			name: {
				ja: "おきてがみ"
			},
			effect: {
				ja: "この特性は、自分の番に1回、このポケモンがベンチにいるなら使えて、使ったなら、このポケモンと、ついているカードをすべてトラッシュする（きぜつにはならない）。自分の山札を1枚引く。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "めざめるパワー"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
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
