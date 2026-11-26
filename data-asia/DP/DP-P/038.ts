import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ポッタイシ" },
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],
	stage: "Stage1",
	level: 20,
	description: { ja: "むれを つくらずに 1ぴきで いる。じぶんが いちばん えらいと どのポッタイシも かんがえているようだ。" },
	evolveFrom: { ja: "ポッチャマ" },
	weight: "23.0 kg",
	attacks: [
		{
			name: { ja: "アクアシャワー" },
			cost: ["Water"],
			effect: { ja: "相手のポケモン全員に、それぞれ10ダメージ。" },
		},
		{
			name: { ja: "しおみず" },
			cost: ["Water", "Water"],
			effect: { ja: "ダメージカウンターがのっている相手のポケモン1匹に、40ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [394],
};

export default card;
