import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ポリゴンZLV.X" },
	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ポリゴンZ" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "デコード" },
			effect: {
				ja: "自分の番に1回使える。自分の山札の好きなカードを2枚まで選び、残りの山札を切る。その後、選んだカードを好きな順番にして、山札の上にもどす。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	resistances: [],
	retreat: 2,
	effect: { ja: "このカードは、バトル場のポリゴンZに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [474],
};

export default card;
