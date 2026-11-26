import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ドータクン" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	level: 44,
	evolveFrom: { ja: "ドーミラー" },
	weight: "187.0 kg",
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "のろいのごうきん" },
			effect: { ja: "このポケモンがバトル場にいるかぎり、ポケモンチェックのたび、「ポケパワー」を持つ相手のポケモン全員に、ダメージカウンターを、それぞれ1個ずつのせる。" },
		},
	],
	attacks: [
		{
			name: { ja: "ダメージぞうふく" },
			cost: [],
			effect: { ja: "ダメージカウンターがのっている相手のポケモン全員に、ダメージカウンターを、それぞれ1個ずつのせる。" },
		},
		{
			name: { ja: "コーティング" },
			cost: ["Psychic", "Colorless", "Colorless"],
			damage: 60,
			effect: { ja: "次の相手の番、自分が受けるワザのダメージは、「-20」される。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Fire",
			value: "-20",
		},
	],
	retreat: 3,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [437],
};

export default card;
