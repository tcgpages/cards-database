import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ヨノワール" },
	illustrator: "Kent Kanetsuna",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage2",
	level: 49,
	description: { ja: "あたまの アンテナで れいかいからの でんぱを じゅしん。しじを うけて ひとを れいかいへ つれていくのだ。" },
	evolveFrom: { ja: "サマヨール" },
	weight: "106.6 kg",
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ダークハイド" },
			effect: {
				ja: "自分の番に1回使える。コインを1回投げオモテなら、相手の手札を見て「ポケモン」を1枚選び、相手の山札の一番下にもどす。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "れいかいのはどう" },
			cost: ["Psychic", "Psychic", "Colorless"],
			damage: 70,
			effect: { ja: "自分のダメージカウンターを2個まで選び、相手のベンチポケモン1匹にのせ替える。（相手のベンチポケモンがいないなら、この効果はなくなる。）" },
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+30",
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [477],
};

export default card;
