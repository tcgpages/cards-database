import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ダイオウドウVMAX"
	},
	rarity: "Triple rare",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: [
		"Metal"
	],
	stage: "VMAX",
	attacks: [
		{
			name: {
				ja: "デンジャラスノーズ"
			},
			effect: {
				ja: "相手のバトルポケモンがたねポケモンなら、100ダメージ追加。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: "100+"
		},
		{
			name: {
				ja: "キョダイハンマー"
			},
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 240
		}
	],
	evolveFrom: {
		ja: "ダイオウドウV"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Grass",
			value: "－30"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "holo"
		}
	],
	dexId: [
		879
	]
}

export default card
