import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ポリゴンZG[ギンガ]" },
	illustrator: "Nobuyuki Fujimoto",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Basic",
	level: 56,
	attacks: [
		{
			name: { ja: "おそいかかる" },
			damage: "20+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、40ダメージを追加。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [],
	retreat: 1,
	dexId: [474],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
