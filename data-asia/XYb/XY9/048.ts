import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ウソッキー"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Basic",
	dexId: [
		185
	],
	description: {
		ja: "襲われないように 木の真似をする。 水が 苦手で 雨が 降り出すと いつの間にか 姿を 消す。"
	},
	attacks: [
		{
			name: {
				ja: "みようみまね"
			},
			effect: {
				ja: "前の相手の番に、相手のポケモンがワザを使っていたなら、そのワザをこのワザとして使う。"
			},
			cost: [
				"Fighting",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
