import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "パルキアLV.X" },
	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "パルキア" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "リコンストラクション" },
			effect: {
				ja: "自分の番に1回使える。自分のベンチポケモン1匹を、相手プレイヤーが選び、相手のベンチポケモン1匹を、自分が選ぶ。その後、選ばれたポケモンを、それぞれ、バトルポケモンと入れ替える（ベンチポケモンがいないプレイヤーは、入れ替えをしない）。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "ハイドロリフレクト" },
			cost: ["Water", "Water", "Water"],
			damage: 60,
			effect: { ja: "のぞむなら、自分のエネルギーをすべて、自分のベンチポケモンに好きなようにつけ替えてよい。（自分のベンチポケモンがいないなら、この効果はなくなる。）" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [],
	retreat: 3,
	effect: { ja: "このカードは、バトル場のパルキアに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [484],
};

export default card;
