import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ポリゴンZ" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage2",
	level: 56,
	evolveFrom: { ja: "ポリゴン2" },
	weight: "34.0 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "インストール" },
			effect: { ja: "自分の番に何回でも使える。自分のポケモンについている「ワザマシン」を1枚、自分の別のポケモンにつけ替える。このパワーは、このポケモンが特殊状態なら使えない。" },
		},
	],
	attacks: [
		{
			name: { ja: "ラーニング" },
			cost: [],
			effect: { ja: "自分の山札から、自分のポケモン1匹からレベルアップする「ポケモンLV.X」を1枚選び、そのポケモンの上にのせ、レベルアップさせる。その後、山札を切る。" },
		},
		{
			name: { ja: "ねつぼうそう" },
			cost: ["Colorless", "Colorless"],
			damage: "40+",
			effect: { ja: "自分についている「ワザマシン」の数×20ダメージを追加。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+30",
		},
	],
	resistances: [],
	retreat: 2,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [474],
};

export default card;
