import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "マスキッパG[ギンガ]" },
	illustrator: "Makoto Imai",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	level: 43,
	attacks: [
		{
			name: { ja: "パワーウィップ" },
			cost: ["Colorless"],
			effect: { ja: "相手のポケモン1匹に、自分のエネルギー×10ダメージ。" },
		},
		{
			name: { ja: "くさむすび" },
			damage: "20+",
			cost: ["Grass", "Colorless"],
			effect: { ja: "相手のにげるエネルギー×10ダメージを追加。" },
		},
	],
	weaknesses: [{ type: "Fire", value: "×2" }],
	resistances: [{ type: "Water", value: "-20" }],
	retreat: 1,
	dexId: [455],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
