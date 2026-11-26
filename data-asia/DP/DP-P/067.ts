import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "イーブイ" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	level: 12,
	description: { ja: "しんかのとき すがたと のうりょくが かわることで きびしい かんきょうに たいおうする めずらしい ポケモン。" },
	weight: "6.5 kg",
	attacks: [
		{
			name: { ja: "かじる" },
			cost: [],
			damage: 10,
		},
		{
			name: { ja: "すなかけ" },
			cost: ["Colorless"],
			effect: { ja: "次の相手の番、このワザを受けた相手は、ワザを使うときコインを1回投げ、ウラならそのワザは失敗。" },
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
	dexId: [133],
};

export default card;
