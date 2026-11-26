import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "マナフィ" },
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	level: 20,
	description: { ja: "つめたい うみの そこで うまれた。じぶんが うまれた うみの そこへ ながい きょりを およいで かえる。" },
	weight: "1.4 kg",
	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札の「たねポケモン」を1枚、自分のベンチに出す。その後、山札を切る。" },
		},
		{
			name: { ja: "アクアリング" },
			cost: ["Water", "Water"],
			damage: 30,
			effect: { ja: "自分を自分のベンチポケモンと入れ替える。" },
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
	dexId: [490],
};

export default card;
