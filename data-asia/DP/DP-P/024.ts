import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ニャルマー" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	level: 12,
	description: { ja: "きにいらないと ツメを たてるが たまに のどを ならして あまえる せいかくが いちぶに だいにんきだ。" },
	weight: "3.9 kg",
	attacks: [
		{
			name: { ja: "あまえる" },
			cost: ["Colorless"],
			effect: { ja: "次の相手の番、このワザを受けた相手が使うワザによるダメージは、「-20」される。" },
		},
		{
			name: { ja: "きどる" },
			cost: ["Colorless", "Colorless"],
			damage: 30,
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
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [431],
};

export default card;
