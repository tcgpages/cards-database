import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "シバのカポエラー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [237],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "こうそくかいてん",
			},
			effect: {
				ja: "次の自分の番、自分が使う「スピニングヘッド」のダメージは「40」になる。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "スピニングヘッド",
			},
			effect: {
				ja: "コインを1回投げ、「おもて」なら、自分を自分のベンチのポケモン1匹と入れ替える。（自分のベンチにポケモンがいないとき、この効果はなくなる。）",
			},
			damage: 20,
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
