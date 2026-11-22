import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "シバのエビワラー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [107],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "れんぞくパンチ",
			},
			effect: {
				ja: "コインを4回投げ、「おもて」の数×10ダメージ。",
			},
			damage: "10×",
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ラッキーパンチ",
			},
			effect: {
				ja: "コインを1回投げ、「おもて」なら、30ダメージを追加する。",
			},
			damage: "20+",
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
		},
	],
};

export default card
