import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "カビゴンLV.X" },
	illustrator: "Shizurow",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "カビゴン" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ばかぐい" },
			effect: {
				ja: "このポケモンがバトル場にいるなら、自分の番に１回使える。自分の手札が６枚になるように、自分の山札からカードを引く。その後、このポケモンをねむりにする。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "うんどう" },
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			damage: 80,
			effect: { ja: "のぞむなら、自分の手札のエネルギーを好きなだけトラッシュしてよい。その場合、トラッシュしたエネルギーの枚数ぶんのダメージカウンターを、自分からとる。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	resistances: [],
	retreat: 4,
	effect: { ja: "このカードは、バトル場のカビゴンに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [143],
};

export default card;
