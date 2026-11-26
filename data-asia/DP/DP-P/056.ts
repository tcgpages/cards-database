import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "マイナン" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	level: 30,
	description: { ja: "なかまを おうえんする しゅうせい。 まけそうになると からだから だす ひばなの かずが どんどん ふえる。" },
	weight: "4.2 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "マイナスチャージ" },
			effect: {
				ja: "前の相手の番に、自分のポケモンがきぜつしていたなら、自分の番に1回使える。自分の山札からカードを2枚引く。このポケモンが特殊状態なら、または、この番に、すでに別のポケモンの「マイナスチャージ」を使っていたなら、このパワーは使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "タッグプレイ(−)" },
			cost: ["Lightning"],
			damage: 20,
			effect: { ja: "自分のベンチに「プラスル」がいるとき、のぞむなら、自分のエネルギーを1個、自分のベンチポケモンにつけ替えてよい。" },
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
	dexId: [312],
};

export default card;
