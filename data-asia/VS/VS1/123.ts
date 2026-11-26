import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "シバのワザマシン01",
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
				ja: "ひきずりだす",
			},
			effect: {
				ja: "のぞむなら、ダメージを与える前に、相手のベンチのポケモンを1匹選び、相手と入れ替えてよい。",
			},
			damage: 30,
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
