import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ヒコザル" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Fire"],
	stage: "Basic",
	level: 8,
	description: { ja: "だんがいぜっぺきを みがるに のぼり いわやまの うえで せいかつする。ほのおを けして ねむる。" },
	weight: "6.2 kg",
	attacks: [
		{
			name: { ja: "ひっかく" },
			cost: [],
			damage: 10,
		},
		{
			name: { ja: "ひのこ" },
			cost: ["Fire", "Colorless"],
			damage: 30,
			effect: { ja: "コインを1回投げウラなら、自分の{R}エネルギーを1個トラッシュ。" },
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [390],
};

export default card;
