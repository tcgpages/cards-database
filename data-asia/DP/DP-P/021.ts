import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "マネネ" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",
	level: 5,
	description: { ja: "あいての うごきを モノマネする しゅうせい。まねを された あいては めが はなせなくなる という。" },
	weight: "13.0 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ベイビィしんか" },
			effect: { ja: "自分の番に1回使える。自分の手札の「バリヤード」を1枚、このポケモンの上にのせ、進化させる。そのとき、このポケモンのダメージカウンターをすべてとる。" },
		},
	],
	attacks: [
		{
			name: { ja: "マネマネ" },
			cost: ["Psychic"],
			effect: { ja: "自分の手札をすべて山札にもどし、山札を切る。その後、山札から、相手の手札の枚数ぶん、カードを引く。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [439],
};

export default card;
