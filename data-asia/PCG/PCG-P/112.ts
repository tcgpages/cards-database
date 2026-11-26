import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウδ-デルタ種",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Ryo Ueda",
	hp: 40,
	types: [
		"Metal",
	],
	stage: "Basic",
	dexId: [
		25,
	],
	attacks: [
		{
			name: {
				ja: "でんじは",
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手をマヒにする。",
			},
			cost: [
				"Colorless",
			],
		},
		{
			name: {
				ja: "アイアンテール",
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、その間に出たオモテ×20ダメージ。",
			},
			cost: [
				"Metal",
				"Colorless",
			],
			damage: "20×",
		},
	],
	weaknesses: [
		{
			type: "Fighting",
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
