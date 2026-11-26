import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "サボネア",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ken Sugimori",
	hp: 40,
	types: [
		"Grass",
	],
	stage: "Basic",
	dexId: [
		331,
	],
	attacks: [
		{
			name: {
				ja: "すなかけ",
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手は、ワザを使うときコインを1回投げウラなら、そのワザは失敗する。",
			},
			cost: [
				"Colorless",
			],
			damage: 10,
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
