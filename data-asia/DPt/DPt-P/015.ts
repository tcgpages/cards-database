import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ルカリオ" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Stage1",
	level: 29,
	evolveFrom: { ja: "リオル" },
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "ラジャー" },
			effect: { ja: "おたがいのプレイヤーは、それぞれ、対戦中に返事をするとき了解なら、胸に手をあて「ラジャー」と答える。" },
		},
	],
	attacks: [
		{
			name: { ja: "かわらわり" },
			damage: 30,
			cost: ["Fighting", "Colorless"],
			effect: { ja: "このワザは、相手の抵抗力・すべての効果に関係なく、ダメージを与える。" },
		},
		{
			name: { ja: "フィーバーステップ" },
			damage: 60,
			cost: ["Fighting", "Colorless", "Colorless"],
			effect: { ja: "コインを１回投げオモテなら、相手のベンチポケモン全員にも、それぞれ10ダメージ。ウラなら、自分のベンチポケモン全員にも、それぞれ10ダメージ。" },
		},
	],
	weaknesses: [{ type: "Psychic", value: "+20" }],
	resistances: [],
	retreat: 1,
	dexId: [448],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
