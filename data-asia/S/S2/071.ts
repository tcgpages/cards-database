import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "カラマネロVMAX"
	},
	rarity: "Triple Rare",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: [
		"Darkness"
	],
	stage: "VMAX",
	attacks: [
		{
			name: {
				ja: "ダイジャマー"
			},
			effect: {
				ja: "相手の手札を見て、その中からカードを1枚選び、相手の山札の下にもどす。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 180
		}
	],
	evolveFrom: {
		ja: "カラマネロV"
	},
	weaknesses: [
		{
			type: "Grass",
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
		687
	]
}

export default card
