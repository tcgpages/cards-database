import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ポッチャマ" },
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	level: 9,
	description: { ja: "プライドが たかく ひとから たべものを もらう ことを きらう。ながい うぶげが さむさを ふせぐ。" },
	weight: "5.2 kg",
	attacks: [
		{
			name: { ja: "つつく" },
			cost: [],
			damage: 10,
		},
		{
			name: { ja: "みずしぶき" },
			cost: ["Water", "Colorless"],
			damage: "20+",
			effect: { ja: "コインを1回投げオモテなら、10ダメージを追加。" },
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
	dexId: [393],
};

export default card;
