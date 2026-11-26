import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "モウカザル" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",
	level: 18,
	description: { ja: "しっぽの ほのおを ながく のばして からだを おおきく みせることで おそってきた てきを こわがらせる。" },
	evolveFrom: { ja: "ヒコザル" },
	weight: "22.0 kg",
	attacks: [
		{
			name: { ja: "ひのまい" },
			cost: ["Fire"],
			damage: 30,
			effect: { ja: "自分のトラッシュの{R}エネルギーを1枚、自分につける。" },
		},
		{
			name: { ja: "みだれひっかき" },
			cost: ["Colorless", "Colorless"],
			damage: "20×",
			effect: { ja: "コインを3回投げ、オモテ×20ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 0,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [391],
};

export default card;
