import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ミノムッチ すなちのミノ" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	level: 12,
	description: { ja: "たたかいで ミノが こわれてしまうと ちかくにある ざいりょうで ミノを すぐに つくりなおす。" },
	weight: "3.4 kg",
	attacks: [
		{
			name: { ja: "てっぺき" },
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げオモテなら、次の相手の番、自分はワザのダメージや効果を受けない。" },
		},
		{
			name: { ja: "たいあたり" },
			cost: ["Fighting", "Colorless"],
			damage: 30,
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [412],
};

export default card;
