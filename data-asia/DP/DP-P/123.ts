import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ドラピオンLV.X" },
	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ドラピオン" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "トリプルポイズン" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、相手のバトルポケモン1匹をどくにする。ポケモンチェックのとき、このどくでのせるダメージカウンターの数は3個になる。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "スナイプテール" },
			cost: ["Darkness", "Darkness", "Colorless", "Colorless"],
			damage: 40,
			effect: { ja: "相手のベンチポケモン1匹にも、40ダメージ。次の相手の番、相手はにげるができない。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	resistances: [],
	retreat: 3,
	effect: { ja: "このカードは、バトル場のドラピオンに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [452],
};

export default card;
