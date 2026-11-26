import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ルカリオ" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",
	level: 30,
	description: { ja: "あらゆる ものが はっする はどうを キャッチする のうりょくを もつ。ひとの ことばを りかいできる。" },
	evolveFrom: { ja: "リオル" },
	weight: "54.0 kg",
	attacks: [
		{
			name: { ja: "フェイント" },
			cost: ["Colorless"],
			damage: 30,
			effect: { ja: "このワザは、相手の抵抗力に関係なく、ダメージを与える。" },
		},
		{
			name: { ja: "はどうだん" },
			cost: ["Fighting", "Fighting"],
			damage: 40,
			effect: { ja: "相手のベンチポケモン1匹にも、20ダメージ。" },
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
