import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ピカチュウ" },
	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	level: 14,
	weight: "6.0 kg",
	attacks: [
		{
			name: { ja: "おかいもの" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札の「ポケモンのどうぐ」を1枚、相手プレイヤーに見せてから、手札に加える。その後、山札を切る。" },
		},
		{
			name: { ja: "かみなり" },
			cost: ["Lightning", "Lightning", "Colorless"],
			damage: 60,
			effect: { ja: "コインを1回投げウラなら、自分にも30ダメージ。" },
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
		{
			type: "normal",
			stamp: ["pokemon-center"],
		},
	],
	rarity: "Promo",
	dexId: [25],
};

export default card;
