import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ヤミカラス" },
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	level: 20,
	description: { ja: "よるに その すがたを みかけると ふきつな できごとが おきると しんじられている ポケモン。" },
	weight: "2.1 kg",
	attacks: [
		{
			name: { ja: "むれる" },
			cost: [],
			effect: { ja: "自分の山札の「ヤミカラス」を1枚、自分のベンチに出す。その後、山札を切る。" },
		},
		{
			name: { ja: "むれにかくれる" },
			cost: ["Colorless", "Colorless"],
			damage: 20,
			effect: { ja: "自分を自分のベンチポケモンと入れ替える。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [198],
};

export default card;
