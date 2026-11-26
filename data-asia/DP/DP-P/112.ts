import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ピチュー" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",
	level: 5,
	description: { ja: "なかまと しっぽの さきを あわせて ひばなを とばす あそびをする。 どきょうだめしを しているらしい。" },
	weight: "2.0 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ベイビィしんか" },
			effect: { ja: "自分の番に1回使える。自分の手札の「ピカチュウ」を1枚、このポケモンの上にのせ、進化させる。そのとき、このポケモンのダメージカウンターをすべてとる。" },
		},
	],
	attacks: [
		{
			name: { ja: "ともだちをさがす" },
			cost: [],
			effect: { ja: "コインを1回投げオモテなら、自分の山札の「ポケモン」を1枚、相手プレイヤーに見せてから、手札に加える。その後、山札を切る。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [172],
};

export default card;
