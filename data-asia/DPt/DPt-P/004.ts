import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ダイノーズG[ギンガ]" },
	illustrator: "Ryota Saito",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	level: 53,
	attacks: [
		{
			name: { ja: "ノーズユニット" },
			cost: ["Metal", "Colorless"],
			effect: { ja: "ポケボディーを持つ相手のポケモン全員に、それぞれ20ダメージ。" },
		},
		{
			name: { ja: "すごいはないき" },
			damage: 70,
			cost: ["Metal", "Colorless", "Colorless", "Colorless"],
			effect: { ja: "次の自分の番の終わりまで、自分のにげるエネルギーは、すべてなくなる。" },
		},
	],
	weaknesses: [{ type: "Water", value: "×2" }],
	resistances: [],
	retreat: 3,
	dexId: [476],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
