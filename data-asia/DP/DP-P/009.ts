import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ブイゼル" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	level: 10,
	description: { ja: "くびに ある うきぶくろに くうきを ためると うきわのように ふくらむ。 すいめんに かおを だして うかぶ。" },
	weight: "29.5 kg",
	attacks: [
		{
			name: { ja: "みずあそび" },
			cost: ["Water"],
			damage: "10+",
			effect: { ja: "自分のエネルギーの数が、相手のエネルギーの数より少ないなら、10ダメージを追加。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [418],
};

export default card;
