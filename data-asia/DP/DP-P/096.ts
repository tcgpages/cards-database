import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ルカリオ" },
	illustrator: "Kent Kanetsuna",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",
	level: 39,
	description: { ja: "あいての はっする はどうを キャッチすることで かんがえや うごきを よみとることが できる。" },
	evolveFrom: { ja: "リオル" },
	weight: "54.0 kg",
	attacks: [
		{
			name: { ja: "ブロッキングパンチ" },
			cost: ["Metal", "Colorless"],
			damage: 40,
			effect: { ja: "次の相手の番、自分が受けるワザのダメージは、「-20」される。" },
		},
		{
			name: { ja: "スマッシュキック" },
			cost: ["Fighting", "Colorless", "Colorless"],
			damage: 60,
			effect: { ja: "このワザは、相手の抵抗力・すべての効果に関係なく、ダメージを与える。" },
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
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [448],
};

export default card;
