import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "波導のルカリオ",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Kouki Saitou",
	hp: 70,
	types: [
		"Metal",
	],
	stage: "Basic",
	dexId: [
		448,
	],
	attacks: [
		{
			name: {
				ja: "メタルクロー",
			},
			cost: [
				"Metal",
				"Colorless",
			],
			damage: 20,
		},
		{
			name: {
				ja: "ボーンラッシュ",
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、その間に出たオモテ×30ダメージ。",
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			damage: "30×",
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
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
