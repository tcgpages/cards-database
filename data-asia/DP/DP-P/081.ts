import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ミツハニー" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	level: 6,
	description: { ja: "あつめた ミツを すみかに はこぶ。よるには たくさんの ミツハニーが かさなって はちのすになり ねむる。" },
	weight: "5.5 kg",
	attacks: [
		{
			name: { ja: "みつのかおり" },
			cost: ["Colorless"],
			effect: { ja: "自分のポケモン1匹から、ダメージカウンターを2個とる。" },
		},
		{
			name: { ja: "ふらふらとぶ" },
			cost: ["Grass", "Grass"],
			effect: { ja: "相手のポケモン1匹に、弱点・抵抗力に関係なく、20ダメージ。" },
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
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [415],
};

export default card;
