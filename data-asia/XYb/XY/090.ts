import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "バリヤード"
	},
	illustrator: "kirisAki",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Fairy"
	],
	stage: "Basic",
	dexId: [
		122
	],
	description: {
		ja: "人を 信じこませるのが うまい。 パントマイムで 作った 壁が 本当に 現れるという。"
	},
	abilities: [
		{
			name: {
				ja: "ベンチバリア"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、ワザのダメージを受けない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ジャグリング"
			},
			effect: {
				ja: "コインを4回投げ、オモテの数×10ダメージ。"
			},
			cost: [
				"Fairy",
				"Colorless"
			],
			damage: "10×"
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
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
