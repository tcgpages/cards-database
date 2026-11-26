import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "フカマル" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	level: 8,
	item: {
		name: { ja: "オレンのみ" },
		effect: { ja: "自分の番の終わりに、このポケモンのダメージカウンターを1個とる。" },
	},
	attacks: [
		{
			name: { ja: "ふいをつく" },
			cost: ["Colorless", "Colorless"],
			damage: 30,
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。" },
		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [443],
};

export default card;
