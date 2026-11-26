import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポケパークのラティオス",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kanako Eo",
	hp: 80,
	types: [
		"Psychic",
	],
	stage: "Basic",
	dexId: [
		381,
	],
	attacks: [
		{
			name: {
				ja: "りゅうのいぶき",
			},
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗する。オモテなら、相手をマヒにする。",
			},
			cost: [
				"Grass",
				"Colorless",
			],
			damage: 30,
		},
		{
			name: {
				ja: "ラスターパージ",
			},
			effect: {
				ja: "自分のエネルギーを3個トラッシュする。",
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Psychic",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
