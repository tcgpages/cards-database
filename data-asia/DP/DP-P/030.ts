import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "パルキア" },
	illustrator: "Daisuke Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Basic",
	level: 67,
	description: { ja: "くうかんを ゆがめる のうりょくを もち シンオウちほうの しんわでは かみさまとして えがかれている。" },
	weight: "336.0 kg",
	attacks: [
		{
			name: { ja: "あくうせつだん" },
			cost: ["Water"],
			damage: 10,
			effect: { ja: "自分の山札の「スタジアム」を1枚、相手プレイヤーに見せてから手札に加え、山札を切る。その場合、場の「スタジアム」をトラッシュ。" },
		},
		{
			name: { ja: "トランスバック" },
			cost: ["Water", "Water", "Colorless"],
			damage: 40,
			effect: { ja: "のぞむなら、コインを1回投げてよい。オモテなら、自分のエネルギーをすべてトラッシュし、相手と相手についているすべてのカードを、相手の山札にもどし、山札を切る。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: ["mcdonalds"],
		},
	],
	rarity: "Promo",
	dexId: [484],
};

export default card;
