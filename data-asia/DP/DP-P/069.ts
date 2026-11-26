import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "リーフィア" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",
	level: 40,
	description: { ja: "しょくぶつのように こうごうせいを するため リーフィアの まわりは すんだ くうきに つつまれている。" },
	evolveFrom: { ja: "イーブイ" },
	weight: "25.5 kg",
	attacks: [
		{
			name: { ja: "スパイラルドレイン" },
			cost: ["Grass", "Colorless"],
			damage: 40,
			effect: { ja: "自分のダメージカウンターを1個とる。" },
		},
		{
			name: { ja: "リーフブレード" },
			cost: ["Grass", "Colorless", "Colorless"],
			damage: "50+",
			effect: { ja: "コインを1回投げオモテなら、20ダメージを追加。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [470],
};

export default card;
