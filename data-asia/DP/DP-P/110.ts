import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "コイル" },
	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 50,
	types: ["Metal"],
	stage: "Basic",
	level: 15,
	item: {
		name: { ja: "じしゃく" },
		effect: { ja: "このポケモンのにげるエネルギーは、自分のベンチの「コイル」の数ぶん、少なくなる。" },
	},
	attacks: [
		{
			name: { ja: "マグネボム" },
			cost: ["Lightning", "Colorless"],
			damage: "30+",
			effect: { ja: "コインを1回投げオモテなら、10ダメージを追加。ウラなら、自分にも10ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [81],
};

export default card;
