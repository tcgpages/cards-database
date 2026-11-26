import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ゴンベ" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	level: 15,
	description: { ja: "ながい からだの けの したに たべものを かくす しゅうせい。 かくしたことを わすれてしまう。" },
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
			name: { ja: "おつかい" },
			cost: ["Colorless", "Colorless"],
			effect: { ja: "自分の山札の「トレーナー」を1枚、相手プレイヤーに見せてから、手札に加える。その後、山札を切る。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 2,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [446],
};

export default card;
