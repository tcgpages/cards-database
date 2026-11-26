import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "クレセリア" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",
	level: 43,
	description: { ja: "ひこうするときは ベールのような はねから ひかる りゅうしを だす。 みかづきのけしんと よばれている。" },
	weight: "85.6 kg",
	attacks: [
		{
			name: { ja: "みらいよち" },
			cost: ["Colorless"],
			effect: { ja: "自分または相手の山札のカードを上から5枚見て、好きな順番に入れ替えて、その山札の上にもどす。" },
		},
		{
			name: { ja: "いやしのひかり" },
			cost: ["Psychic", "Psychic", "Colorless"],
			damage: 40,
			effect: { ja: "自分のポケモン全員から、ダメージカウンターをそれぞれ1個ずつとる。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [488],
};

export default card;
