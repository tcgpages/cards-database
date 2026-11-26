import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "エイパム" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	level: 17,
	description: { ja: "てを のばしても とどかない えだに はえる くだものを しっぽで とる。 ほんものの うでよりも きよう。" },
	weight: "11.5 kg",
	attacks: [
		{
			name: { ja: "しっぽではたく" },
			cost: ["Colorless"],
			damage: 10,
		},
		{
			name: { ja: "すてさる" },
			cost: ["Colorless", "Colorless"],
			effect: { ja: "相手のポケモン1匹に、20ダメージ。ダメージを与える前に、そのポケモンについている「ポケモンのどうぐ」を、すべてトラッシュ。" },
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
	dexId: [190],
};

export default card;
