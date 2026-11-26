import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ヒードランLV.X" },
	illustrator: "Shizurow",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ヒードラン" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ねっぷう" },
			effect: {
				ja: "このポケモンがベンチにいるなら、自分の番の終わりに1回使える。その番に、自分の{R}または{M}のバトルポケモンのワザで、そのポケモンからトラッシュした基本エネルギーのうち2枚までを選び、そのポケモンにつけなおす。",
			},
		},
		{
			type: "Poke-BODY",
			name: { ja: "ヒートメタル" },
			effect: {
				ja: "相手のやけどのポケモンが進化・退化・レベルアップしても、やけどは回復しない。ポケモンチェックのとき、相手プレイヤーがやけどで投げるコインは、すべてウラとしてあつかう。",
			},
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	resistances: [],
	retreat: 4,
	effect: { ja: "このカードは、バトル場のヒードランに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [485],
};

export default card;
