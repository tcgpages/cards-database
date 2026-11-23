import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダーV"
	},
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: [
		"Lightning"
	],
	stage: "Basic",
	attacks: [
		{
			name: {
				ja: "どくづき"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。"
			},
			cost: [
				"Lightning"
			],
			damage: 20
		},
		{
			name: {
				ja: "エレキライオット"
			},
			effect: {
				ja: "相手のバトルポケモンがどくなら、90ダメージ追加。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: "90+"
		}
	],
	suffix: "V",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo"
		}
	],
	dexId: [
		849
	]
}

export default card
