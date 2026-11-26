import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "プラスル" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	level: 30,
	description: { ja: "ひばなの ボンボンを つくって なかまを おうえんする。 でんちゅうから でんきを すいとる。" },
	weight: "4.2 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "プラスチャージ" },
			effect: {
				ja: "前の相手の番に、自分のポケモンがきぜつしていたなら、自分の番に1回使える。自分のトラッシュの基本エネルギーを2枚まで選び、相手プレイヤーに見せてから、手札に加える。このポケモンが特殊状態なら、または、この番に、すでに別のポケモンの「プラスチャージ」を使っていたなら、このパワーは使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "タッグプレイ(＋)" },
			cost: ["Lightning"],
			damage: 20,
			effect: { ja: "自分のベンチに「マイナン」がいるとき、のぞむなら、このワザのダメージを、バトルポケモンではなくベンチポケモン1匹に与えてよい。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [311],
};

export default card;
