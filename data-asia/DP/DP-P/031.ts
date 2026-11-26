import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "フワライド" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",
	level: 40,
	description: { ja: "ひるまは ねぼけて うかんでいるが ゆうがた たいぐんで とんでいく。 いきさきは だれも しらない。" },
	evolveFrom: { ja: "フワンテ" },
	weight: "15.0 kg",
	attacks: [
		{
			name: { ja: "かぜでおくる" },
			cost: ["Colorless"],
			effect: { ja: "自分のトラッシュから、「ポケモン」と「サポーター」を合計5枚まで選び、相手プレイヤーに見せてから、山札にもどす。その後、山札を切る。" },
		},
		{
			name: { ja: "ばくえん" },
			cost: ["Psychic", "Psychic", "Psychic"],
			damage: 60,
			effect: { ja: "おたがいのベンチポケモン全員にも、それぞれ10ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20",
		},
	],
	retreat: 0,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [426],
};

export default card;
