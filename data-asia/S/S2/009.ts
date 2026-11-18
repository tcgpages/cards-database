import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "オーロット"
	},
	rarity: "Uncommon",
	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		709
	],
	description: {
		ja: "森の 木を 伐り倒す 人間を 食べると 恐れられているが 森で 暮らす ポケモンたちには 優しい。"
	},
	attacks: [
		{
			name: {
				ja: "タネばくだん"
			},
			cost: [
				"Grass"
			],
			damage: 40
		},
		{
			name: {
				ja: "シャドーコープ"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Grass",
				"Grass",
				"Colorless"
			],
			damage: 120
		}
	],
	evolveFrom: {
		ja: "ボクレー"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
