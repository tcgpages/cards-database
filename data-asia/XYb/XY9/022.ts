import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "オタマロ"
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		535
	],
	description: {
		ja: "ほほを 振動させて 人には 聞こえない 音波を 出す。 音波の リズムで 会話する。"
	},
	attacks: [
		{
			name: {
				ja: "ざわつく"
			},
			cost: [
				"Water"
			],
			damage: 10
		},
		{
			name: {
				ja: "りんしょう"
			},
			effect: {
				ja: "ワザ「りんしょう」を持つ自分のポケモンの数×10ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "10×"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
