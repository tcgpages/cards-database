import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ディアルガ" },
	illustrator: "Daisuke Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Basic",
	level: 68,
	description: { ja: "じかんを あやつる ちからを もつ。 シンオウちほうでは かみさまと よばれ しんわに とうじょうする。" },
	weight: "683.0 kg",
	attacks: [
		{
			name: { ja: "ときのさけび" },
			cost: ["Metal"],
			damage: 10,
			effect: { ja: "自分の山札からカードを1枚引く。" },
		},
		{
			name: { ja: "ラスターカノン" },
			cost: ["Metal", "Metal", "Colorless"],
			damage: 40,
			effect: {
				ja: "のぞむなら、自分のエネルギーをすべて、手札にもどしてよい。その場合、相手を1進化ぶん退化させる。退化のためにはがした「ポケモンのカード」は、相手プレイヤーの山札にもどし、山札を切る。",
			},
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
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: ["mcdonalds"],
		},
	],
	rarity: "Promo",
	dexId: [483],
};

export default card;
