import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "パチリス" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	level: 20,
	description: { ja: "ほっぺの でんきぶくろで つくった でんきを しっぽから うちだす。 きの うえで せいかつしている。" },
	weight: "3.9 kg",
	attacks: [
		{
			name: { ja: "でんじは" },
			cost: ["Lightning"],
			damage: 10,
			effect: { ja: "コインを1回投げオモテなら、相手をマヒにする。" },
		},
		{
			name: { ja: "どくのみ" },
			cost: ["Lightning", "Colorless"],
			damage: "20+",
			effect: { ja: "自分の場に「グレッグル」がいるなら、20ダメージを追加し、相手をどくにする。" },
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
