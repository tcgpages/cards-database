import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "カイリューFB[フロンティアブレーン]" },
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",
	level: 50,
	attacks: [
		{
			name: { ja: "マッハブロー" },
			damage: 20,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "相手がSPポケモンなら、このワザのダメージは「80」になる。" },
		},
		{
			name: { ja: "きょだいなしっぽ" },
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。" },
		},
	],
	weaknesses: [{ type: "Colorless", value: "×2" }],
	resistances: [{ type: "Fighting", value: "-20" }],
	retreat: 3,
	dexId: [149],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
