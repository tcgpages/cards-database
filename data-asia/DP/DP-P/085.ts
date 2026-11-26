import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "フィオネ" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	level: 20,
	description: { ja: "あたたかい うみに すむ ポケモン。 あたまの うきぶくろを ふくらませて なみまを ただよい えさを さがす。" },
	weight: "3.1 kg",
	attacks: [
		{
			name: { ja: "あまえる" },
			cost: ["Colorless"],
			effect: { ja: "次の相手の番、このワザを受けた相手が使うワザのダメージは、「-20」される。" },
		},
		{
			name: { ja: "うずしお" },
			cost: ["Water", "Water"],
			damage: 30,
			effect: { ja: "コインを1回投げオモテなら、相手のエネルギーを1個トラッシュ。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [489],
};

export default card;
