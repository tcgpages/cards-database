import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "フーディン四[してんのう]" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	level: 56,
	attacks: [
		{
			name: { ja: "じこさいせい" },
			cost: ["Psychic"],
			effect: { ja: "自分の{P}エネルギーを1個トラッシュし、自分のダメージカウンターを4個とる。" },
		},
		{
			name: { ja: "ふしぎなビーム" },
			damage: 30,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、相手のエネルギーを1個トラッシュ。" },
		},
	],
	weaknesses: [{ type: "Psychic", value: "×2" }],
	resistances: [],
	retreat: 1,
	dexId: [65],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
