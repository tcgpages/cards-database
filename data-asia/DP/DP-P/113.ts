import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ピカチュウ" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	level: 18,
	description: { ja: "ほっぺたの でんきぶくろから でんきを ピリピリ だしているときは あいてを けいかいしている あいず。" },
	weight: "6.0 kg",
	attacks: [
		{
			name: { ja: "なきごえ" },
			cost: ["Colorless"],
			effect: { ja: "次の相手の番、このワザを受けた相手が使うワザのダメージは、「-20」される。" },
		},
		{
			name: { ja: "まひまひ" },
			cost: ["Lightning", "Colorless", "Colorless"],
			damage: 30,
			effect: { ja: "この番に、自分が「ピチュー」から進化していたなら、相手をマヒにする。" },
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
