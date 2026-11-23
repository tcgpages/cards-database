import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ガマガル"
	},
	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	evolveFrom: {
		ja: "オタマロ"
	},
	stage: "Stage1",
	dexId: [
		536
	],
	description: {
		ja: "水中と 陸地で 暮らす。 長く ねばねばする ベロを使って 相手の 動きを 封じこめる。"
	},
	attacks: [
		{
			name: {
				ja: "かえるとび"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Water",
				"Water"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "マッドショット"
			},
			cost: [
				"Water",
				"Water",
				"Water"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
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
