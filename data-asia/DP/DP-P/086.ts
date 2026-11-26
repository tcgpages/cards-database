import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "レントラー" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Stage2",
	level: 45,
	description: { ja: "ひとみが きんいろに ひかるとき カベの むこうに かくれている えものを みつけることが できる。" },
	evolveFrom: { ja: "ルクシオ" },
	weight: "42.0 kg",
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "いかくのキバ" },
			effect: { ja: "相手のワザのダメージは、このポケモンがバトル場にいるかぎり、すべて「-10」される。" },
		},
	],
	attacks: [
		{
			name: { ja: "かみなり" },
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			damage: 120,
			effect: { ja: "コインを1回投げウラなら、自分にも40ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+30",
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
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [405],
};

export default card;
