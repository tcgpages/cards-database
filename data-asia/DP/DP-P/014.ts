import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ビッパ" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	level: 10,
	description: { ja: "なにごとにも どうじない ずぶとい しんけいの もちぬし。みかけの わりには きびんに かつどうする。" },
	weight: "20.0 kg",
	attacks: [
		{
			name: { ja: "ドわすれ" },
			cost: ["Colorless"],
			effect: { ja: "相手のワザを1つ選ぶ。次の相手の番、その相手は、そのワザを使えない。" },
		},
		{
			name: { ja: "ゴミあさり" },
			cost: ["Colorless"],
			effect: { ja: "自分のトラッシュの「トレーナー」を1枚、相手プレイヤーに見せてから、手札に加える。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [399],
};

export default card;
