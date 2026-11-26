import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "バクーダ"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fire"
	],
	evolveFrom: {
		ja: "ドンメル"
	},
	stage: "Stage1",
	dexId: [
		323
	],
	description: {
		ja: "怒ると 灼熱の マグマを 背中の コブから 噴き上げる。 火山の 火口に 住処が ある。"
	},
	attacks: [
		{
			name: {
				ja: "ぶつかる"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ふんか"
			},
			effect: {
				ja: "おたがいの山札を上から1枚ずつトラッシュし、その中のエネルギーの枚数×60ダメージを追加。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: "80+"
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 4,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
