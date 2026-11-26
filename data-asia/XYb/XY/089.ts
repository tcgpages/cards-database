import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "マギアナEX"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: [
		"Metal"
	],
	dexId: [
		801
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "ミスティックハート"
			},
			effect: {
				ja: "このポケモンがいるかぎり、鋼エネルギーがついている自分のポケモン全員は、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果はなくならない。）"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ソウルブラスター"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使う「ソウルブラスター」のダメージは「60」になる。"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 120
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
