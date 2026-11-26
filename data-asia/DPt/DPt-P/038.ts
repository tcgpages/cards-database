import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ピチュー" },
	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	weight: "2.0 kg",
	stage: "Basic",
	level: 9,
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ベイビィしんか" },
			effect: { ja: "自分の番に1回使える。自分の手札の「ピカチュウ」を1枚、このポケモンの上にのせ、進化させる。そのとき、このポケモンのダメージカウンターをすべてとる。" },
		},
	],
	attacks: [
		{
			name: { ja: "おさんぽ" },
			cost: [],
			effect: { ja: "自分の山札のカードを上から5枚見て、その中のカードを1枚、手札に加える。その後、残りのカードを山札にもどし、山札を切る。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "+10" }],
	resistances: [{ type: "Metal", value: "-20" }],
	retreat: 1,
	dexId: [172],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
