import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "イーブイ" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	level: 14,
	description: { ja: "しんかのとき すがたと のうりょくが かわることで きびしい かんきょうに たいおうする めずらしい ポケモン。" },
	weight: "6.5 kg",
	attacks: [
		{
			name: { ja: "なかまをよぶ" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札の「イーブイ」を好きなだけ選び、自分のベンチに出す。その後、山札を切る。" },
		},
		{
			name: { ja: "とびかかる" },
			cost: ["Colorless"],
			damage: 20,
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。" },
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
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [133],
};

export default card;
