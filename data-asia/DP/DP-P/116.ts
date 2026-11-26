import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ミミロップ" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	level: 36,
	description: { ja: "いつも みみさきを けづくろいして ていれを おこたらない きれいずき。 かろやかに とびはねて はしる。" },
	evolveFrom: { ja: "ミミロル" },
	weight: "33.3 kg",
	attacks: [
		{
			name: { ja: "とびげり" },
			cost: ["Colorless", "Colorless"],
			damage: 20,
			effect: { ja: "相手のベンチポケモン1匹にも、20ダメージ。" },
		},
		{
			name: { ja: "げんきいっぱい" },
			cost: ["Colorless", "Colorless", "Colorless"],
			damage: 50,
			effect: { ja: "この番に、自分が「ミミロル」から進化していたなら、自分のダメージカウンターをすべてとる。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [428],
};

export default card;
