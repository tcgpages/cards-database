import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "グレイシア" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	level: 46,
	description: { ja: "ぜんしんの たいもうを こおらせて ハリのように するどく とがらせる。 てきから みを まもる しゅだん。" },
	evolveFrom: { ja: "イーブイ" },
	weight: "25.9 kg",
	attacks: [
		{
			name: { ja: "アイスショット" },
			cost: ["Water", "Colorless"],
			damage: 30,
			effect: { ja: "相手のベンチポケモン1匹にも、10ダメージ。" },
		},
		{
			name: { ja: "こごえるかぜ" },
			cost: ["Water", "Colorless", "Colorless"],
			damage: 60,
			effect: { ja: "コインを1回投げオモテなら、相手をねむりにする。" },
		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [471],
};

export default card;
