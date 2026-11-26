import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ナエトル" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	level: 7,
	description: { ja: "ぜんしんで こうごうせいを して さんそを つくる。のどが かわくと あたまの はっぱが しおれてしまう。" },
	weight: "10.2 kg",
	attacks: [
		{
			name: { ja: "すいとる" },
			cost: ["Grass"],
			damage: 10,
			effect: { ja: "自分のダメージカウンターを1個とる。" },
		},
		{
			name: { ja: "あっちっち" },
			cost: ["Grass", "Colorless", "Colorless"],
			damage: "40+",
			effect: { ja: "自分の場に「ヒコザル」がいるなら、20ダメージを追加し、相手をやけどにする。" },
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
			type: "Water",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [387],
};

export default card;
