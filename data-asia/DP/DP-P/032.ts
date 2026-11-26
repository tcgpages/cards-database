import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "グレッグル" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	level: 17,
	description: { ja: "ほっぺたに どくぶくろを もつ。 あいての すきを ついて もうどくを にじませている ゆびを つきさす。" },
	weight: "23.0 kg",
	attacks: [
		{
			name: { ja: "ぶきみなおと" },
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げオモテなら、次の相手の番、相手プレイヤーは、手札から「サポーター」を出して使えない。" },
		},
		{
			name: { ja: "ゆびでつく" },
			cost: ["Psychic", "Psychic"],
			damage: 20,
			effect: { ja: "コインを1回投げオモテなら、相手をどくにする。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: ["mcdonalds"],
		},
	],
	rarity: "Promo",
	dexId: [453],
};

export default card;
