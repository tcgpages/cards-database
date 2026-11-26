import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "イエッサンV"
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare V",
	category: "Pokemon",
	hp: 180,
	types: [
		"Psychic"
	],
	dexId: [
		876
	],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			name: {
				ja: "こころくばり"
			},
			effect: {
				ja: "自分の番に1回使える。自分のバトルポケモンのHPを「20」回復する。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "サイコキネシス"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×60ダメージ追加。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 2,
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
