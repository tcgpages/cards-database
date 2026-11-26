import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ダークライ" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",
	level: 50,
	item: {
		name: { ja: "ナゾのみ" },
		effect: { ja: "このポケモンが、相手の{F}ポケモンからワザのダメージを受けたら、その番の終わりにダメージカウンターを4個とる。" },
	},
	attacks: [
		{
			name: { ja: "あくうせつだん" },
			cost: ["Water"],
			damage: 10,
			effect: { ja: "自分の山札の「スタジアム」を1枚、相手プレイヤーに見せてから手札に加え、山札を切る。その場合、場の「スタジアム」をトラッシュ。" },
		},
		{
			name: { ja: "ときのほうこう" },
			cost: ["Metal", "Metal", "Metal"],
			damage: 80,
			effect: { ja: "自分のトラッシュの「ポケモン」を3枚、相手プレイヤーに見せてから、山札にもどす。その後、山札を切る。（3枚もどせないなら、このワザは失敗。）" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [491],
};

export default card;
