import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ヒトカゲ" },
	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],
	stage: "Basic",
	level: 9,
	weight: "8.5 kg",
	attacks: [
		{
			name: { ja: "ちいさなおつかい" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札の基本エネルギーを1枚、相手プレイヤーに見せてから、手札に加える。その後、山札を切る。" },
		},
		{
			name: { ja: "かえんほうしゃ" },
			cost: ["Fire", "Fire", "Colorless"],
			damage: 50,
			effect: { ja: "自分のエネルギーを1個トラッシュ。" },
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["pokemon-center"],
		},
	],
	rarity: "Promo",
	dexId: [4],
};

export default card;
