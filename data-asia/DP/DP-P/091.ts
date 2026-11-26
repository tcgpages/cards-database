import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ゴンベ" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	level: 7,
	description: { ja: "ながい からだの けの したに たべものを かくす しゅうせい。かくしたことを わすれてしまう。" },
	weight: "105.0 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ベイビィしんか" },
			effect: { ja: "自分の番に1回使える。自分の手札の「カビゴン」を1枚、このポケモンの上にのせ、進化させる。そのとき、このポケモンのダメージカウンターをすべてとる。" },
		},
	],
	attacks: [
		{
			name: { ja: "したでなめる" },
			cost: ["Colorless", "Colorless"],
			damage: 20,
			effect: { ja: "コインを1回投げオモテなら、相手をマヒにする。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 2,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [446],
};

export default card;
