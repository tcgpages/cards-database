import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "フシギダネ" },
	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	weight: "6.9 kg",
	stage: "Basic",
	level: 12,
	attacks: [
		{
			name: { ja: "プレゼント" },
			cost: ["Grass"],
			effect: { ja: "コインを1回投げオモテなら、自分の山札の好きなカードを1枚、手札に加える。その後、山札を切る。" },
		},
		{
			name: { ja: "はっぱカッター" },
			damage: 40,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],
	weaknesses: [{ type: "Fire", value: "+10" }],
	resistances: [],
	retreat: 1,
	dexId: [1],
	variants: [{ type: "normal", stamp: ["pokemon-center"] }],
	rarity: "Promo",
};

export default card;
