import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ポッチャマ" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",
	level: 6,
	description: { ja: "きたぐにの かいがんせんで くらす。 およぎが とくい。１０ぷん いじょう うみに もぐって エサを とる。" },
	weight: "5.2 kg",
	attacks: [
		{
			name: { ja: "みずあそび" },
			cost: ["Water"],
			damage: "10+",
			effect: { ja: "自分のエネルギーの数が、相手のエネルギーの数より少ないなら、10ダメージを追加。" },
		},
		{
			name: { ja: "なみなみ" },
			cost: ["Water", "Colorless", "Colorless"],
			damage: 40,
			effect: { ja: "自分の場に「ブイゼル」がいるなら、相手のベンチポケモン全員にも、それぞれ10ダメージ。" },
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
	dexId: [393],
};

export default card;
