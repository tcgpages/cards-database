import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "エンペルトLV.X" },
	illustrator: "Shizurow",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "エンペルト" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "しじょうめいれい" },
			effect: {
				ja: "自分の番に1回使える。相手の手札を、オモテを見ないで2枚まで選ぶ。選んだカードは、ウラのまま相手のバトル場の横におき、手札としてあつかわれない。次の相手の番の終わりに、それらのカードを相手の手札にもどす。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "ハイドロインパクト" },
			cost: ["Water", "Water", "Water"],
			effect: { ja: "相手のポケモン1匹に、80ダメージ。次の自分の番、自分はワザを使えない。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+30",
		},
	],
	resistances: [],
	retreat: 2,
	effect: { ja: "このカードは、バトル場のエンペルトに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [395],
};

export default card;
