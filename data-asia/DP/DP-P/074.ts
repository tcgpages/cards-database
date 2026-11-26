import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ポッチャマ" },
	illustrator: "Kent Kanetsuna",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	level: 10,
	description: { ja: "きたぐにの かいがんせんで くらす。およぎが とくい。１０ぷん いじょう うみに もぐって エサを とる。" },
	weight: "5.2 kg",
	attacks: [
		{
			name: { ja: "みずしぶき" },
			cost: ["Water"],
			damage: "10+",
			effect: { ja: "コインを1回投げオモテなら、10ダメージを追加。" },
		},
		{
			name: { ja: "ずつき" },
			cost: ["Colorless", "Colorless"],
			damage: 20,
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
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [393],
};

export default card;
