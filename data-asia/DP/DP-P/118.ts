import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ヒコザル" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 40,
	types: ["Fire"],
	stage: "Basic",
	level: 5,
	description: { ja: "おしりの ほのおは おなかで つくられた ガスが ねんりょう。 あめに ぬれても きえない。" },
	weight: "6.2 kg",
	attacks: [
		{
			name: { ja: "れんぞくひっかき" },
			cost: ["Fire"],
			damage: "10×",
			effect: { ja: "コインを4回投げ、オモテ×10ダメージ。" },
		},
		{
			name: { ja: "ねむねむ" },
			cost: ["Fire", "Colorless", "Colorless"],
			damage: "40+",
			effect: { ja: "自分の場に「ポッチャマ」がいるなら、20ダメージを追加し、相手をねむりにする。" },
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
