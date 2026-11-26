import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ナエトル" },
	illustrator: "Daisuke Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	level: 11,
	description: { ja: "ぜんしんで こうごうせいを して さんそを つくる。のどが かわくと あたまの はっぱが しおれてしまう。" },
	weight: "10.2 kg",
	attacks: [
		{
			name: { ja: "ころがる" },
			cost: ["Colorless"],
			damage: 10,
		},
		{
			name: { ja: "はっぱカッター" },
			cost: ["Grass", "Colorless"],
			damage: 30,
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
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [387],
};

export default card;
