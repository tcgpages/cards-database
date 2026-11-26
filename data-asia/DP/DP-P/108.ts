import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "グライオン" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",
	level: 47,
	evolveFrom: { ja: "グライガー" },
	weight: "42.5 kg",
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "バインドアイ" },
			effect: { ja: "このポケモンがバトル場にいるかぎり、特殊状態になっている相手のポケモンが進化・退化・レベルアップしても、その特殊状態は回復しない。" },
		},
	],
	attacks: [
		{
			name: { ja: "きりこみターン" },
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手の残りHPが「10」になるように、相手にダメージカウンターをのせる。のせた場合、自分と自分についているすべてのカードを、自分の山札にもどし、山札を切る。",
			},
		},
		{
			name: { ja: "まさつねつ" },
			cost: ["Fighting"],
			damage: 20,
			effect: { ja: "相手をやけどにする。" },
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 0,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [472],
};

export default card;
