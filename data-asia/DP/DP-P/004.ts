import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ルカリオLV.X" },
	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ルカリオ" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "みきわめ" },
			effect: {
				ja: "自分の番に、このカードを手札から出してポケモンをレベルアップさせたとき、1回使える。次の相手の番、このポケモンはワザによるダメージや効果を受けない。（このポケモンがバトル場をはなれたなら、この効果はなくなる。）",
			},
		},
	],
	attacks: [
		{
			name: { ja: "インファイト" },
			cost: ["Fighting", "Fighting", "Colorless"],
			damage: 80,
			effect: { ja: "次の相手の番、自分が受けるワザによるダメージは、「+30」される。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	resistances: [],
	retreat: 1,
	effect: { ja: "このカードは、バトル場のルカリオに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [448],
};

export default card;
