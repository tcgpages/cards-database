import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ピンプク" },
	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	level: 8,
	description: { ja: "しろくて まるいものが だいすき。 ラッキーの まねをして タマゴに そっくりな いしを かかえている。" },
	weight: "24.4 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ベイビィしんか" },
			effect: { ja: "自分の番に1回使える。自分の手札の「ラッキー」を1枚、このポケモンの上にのせ、進化させる。そのとき、このポケモンのダメージカウンターをすべてとる。" },
		},
	],
	attacks: [
		{
			name: { ja: "ぴんぴん" },
			cost: [],
			effect: { ja: "自分のポケモン1匹から、ダメージカウンターを2個とる。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [440],
};

export default card;
