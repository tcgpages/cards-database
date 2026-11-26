import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "パチリス" },
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	level: 23,
	description: { ja: "せいでんきが たまって パチパチする けだまを だいこうぶつの きのみと いっしょに みきの あなに かくす。" },
	weight: "3.9 kg",
	attacks: [
		{
			name: { ja: "ちいさなおつかい" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札の基本エネルギーを1枚、相手プレイヤーに見せてから、手札に加える。その後、山札を切る。" },
		},
		{
			name: { ja: "でんげき" },
			cost: ["Lightning"],
			damage: 20,
			effect: { ja: "コインを1回投げウラなら、自分にも10ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20",
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
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [417],
};

export default card;
