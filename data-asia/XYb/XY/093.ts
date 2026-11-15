import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "シュシュプ"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: [
		"Fairy"
	],
	stage: "Basic",
	dexId: [
		682
	],
	description: {
		ja: "かいだ 者を うっとりさせる 香りを 体から 漂わせる。 食べた もので 香りが 変わる。"
	},
	attacks: [
		{
			name: {
				ja: "あまいかおり"
			},
			effect: {
				ja: "自分のポケモンを1匹選び、HPを「20」回復する。"
			},
			cost: [
				"Fairy"
			]
		},
		{
			name: {
				ja: "はねまわる"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
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
