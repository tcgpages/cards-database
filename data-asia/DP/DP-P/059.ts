import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ミノムッチ くさきのミノ" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],
	stage: "Basic",
	level: 10,
	description: { ja: "つめたい こがらしを ふせぐため こえだや おちばを ざいりょうに ミノを つくり からだを おおう。" },
	weight: "3.4 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ミノをまとう" },
			effect: { ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。自分のトラッシュの{G}の基本エネルギーを1枚、このポケモンにつける。" },
		},
	],
	attacks: [
		{
			name: { ja: "くさミノたいあたり" },
			cost: ["Colorless"],
			damage: "10+",
			effect: { ja: "自分に{G}エネルギーがついているなら、10ダメージを追加。" },
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
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [412],
};

export default card;
