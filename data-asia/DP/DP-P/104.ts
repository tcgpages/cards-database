import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ガブリアス" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],
	stage: "Stage2",
	level: 64,
	description: { ja: "ジェットせんとうきに まけない スピードで そらを とぶ。 ねらった えものは にがさない。" },
	evolveFrom: { ja: "ガバイト" },
	weight: "95.0 kg",
	attacks: [
		{
			name: { ja: "りゅうのいかり" },
			cost: ["Colorless"],
			damage: 80,
			effect: { ja: "コインを2回投げ、1回でもウラなら、このワザは失敗。" },
		},
		{
			name: { ja: "ジェットソード" },
			cost: ["Colorless", "Colorless", "Colorless"],
			damage: 100,
			effect: { ja: "自分のエネルギーを2個トラッシュし、相手のベンチポケモン全員にも、それぞれ10ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+30",
		},
	],
	resistances: [],
	retreat: 0,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [445],
};

export default card;
