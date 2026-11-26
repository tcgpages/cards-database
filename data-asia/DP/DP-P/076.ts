import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ドダイトスLV.X" },
	illustrator: "Shizurow",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ドダイトス" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "もりのざわめき" },
			effect: {
				ja: "自分のサイドの枚数が、相手のサイドの枚数より多いなら、自分の番に1回使える。相手のベンチポケモンを1匹選び、相手のバトルポケモンと入れ替える。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "ばくしん" },
			cost: ["Grass", "Grass", "Grass", "Colorless"],
			damage: 100,
			effect: { ja: "相手のベンチポケモン1匹にも、30ダメージ。自分にも30ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30",
		},
	],
	resistances: [],
	retreat: 4,
	effect: { ja: "このカードは、バトル場のドダイトスに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [389],
};

export default card;
