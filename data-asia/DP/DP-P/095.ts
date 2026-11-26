import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ピカチュウ" },
	illustrator: "Daisuke Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	level: 12,
	description: { ja: "ほっぺたの でんきぶくろから でんきを ピリピリ だしているときは あいてを けいかいしている あいず。" },
	weight: "6.0 kg",
	attacks: [
		{
			name: { ja: "でんこうせっか" },
			cost: ["Colorless"],
			damage: "10+",
			effect: { ja: "コインを1回投げオモテなら、10ダメージを追加。" },
		},
		{
			name: { ja: "ボルテッカー" },
			cost: ["Lightning", "Colorless", "Colorless"],
			damage: 50,
			effect: { ja: "自分にも10ダメージ。" },
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
