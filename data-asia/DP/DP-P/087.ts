import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "リーシャン" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",
	level: 5,
	description: { ja: "はねるたび リリンと おとを だす。たかい しゅうはすうの なきごえで あいての みみを きこえなくする。" },
	weight: "0.6 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ベイビィしんか" },
			effect: { ja: "自分の番に1回使える。自分の手札の「チリーン」を1枚、このポケモンの上にのせ、進化させる。そのとき、このポケモンのダメージカウンターをすべてとる。" },
		},
	],
	attacks: [
		{
			name: { ja: "さわぐ" },
			cost: [],
			effect: { ja: "コインを1回投げオモテなら、相手のポケモン全員に、それぞれ10ダメージ。" },
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
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [433],
};

export default card;
