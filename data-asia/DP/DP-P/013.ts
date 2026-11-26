import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ムックル" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	level: 8,
	description: { ja: "たくさんの むれで こうどうする。からだは ちいさいが はばたく ちからは ひじょうに つよい。" },
	weight: "2.0 kg",
	attacks: [
		{
			name: { ja: "かぜおこし" },
			cost: ["Colorless"],
			damage: 10,
		},
		{
			name: { ja: "でんこうせっか" },
			cost: ["Colorless", "Colorless"],
			damage: "10+",
			effect: { ja: "コインを1回投げオモテなら、20ダメージを追加。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [396],
};

export default card;
