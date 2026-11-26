import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ピカチュウ" },
	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	level: 15,
	description: { ja: "もりの なかで なかまと くらす。 ほっぺたの りょうがわにある でんきぶくろに でんきを ためる。" },
	weight: "6.0 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "エレリサイクル" },
			effect: {
				ja: "このポケモンの進化前に「ピチュー」のカードがあるなら、自分の番に1回使える。自分のトラッシュの{L}エネルギーを1枚、相手プレイヤーに見せてから、手札に加える。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "ビカビカ" },
			cost: ["Lightning", "Colorless"],
			damage: "20+",
			effect: { ja: "コインを1回投げオモテなら、10ダメージを追加。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [25],
};

export default card;
