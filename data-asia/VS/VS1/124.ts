import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "シバのワザマシン02",
	},

	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Technical Machine",

	effect: {
		ja: "このカードは、自分の場の「シバのポケモン」につけて使い、つけた番の終わりにトラッシュする。このカードに書いてあるワザは、このカードをつけているポケモンの持っているワザとして使うことができる。",
	},

	attacks: [
		{
			cost: ["Fighting", "Fighting"],
			name: {
				ja: "ワンツーパンチ",
			},
			effect: {
				ja: "コインを1回投げ、「おもて」なら、20ダメージを追加する。",
			},
			damage: "30+",
		},
	],

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
