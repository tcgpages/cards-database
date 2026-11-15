import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ストリンダーVMAX"
	},
	rarity: "Triple rare",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: [
		"Lightning"
	],
	stage: "VMAX",
	attacks: [
		{
			name: {
				ja: "キョダイライオット"
			},
			effect: {
				ja: "相手のバトルポケモンがどくなら、80ダメージ追加。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: "160+"
		}
	],
	evolveFrom: {
		ja: "ストリンダーV"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
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
