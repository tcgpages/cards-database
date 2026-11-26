import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ピカチュウ" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",
	level: 13,
	item: {
		name: { ja: "オレンのみ" },
		effect: { ja: "自分の番の終わりに、このポケモンのダメージカウンターを1個とる。" },
	},
	attacks: [
		{
			name: { ja: "スパーク" },
			cost: ["Lightning", "Colorless"],
			damage: 10,
			effect: { ja: "相手のベンチポケモン2匹にも、それぞれ10ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [25],
};

export default card;
