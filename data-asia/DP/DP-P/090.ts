import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ダイノーズ" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Stage1",
	level: 44,
	description: { ja: "ぜんしんから つよい じりょくを だしている。３この チビノーズと よばれる ユニットを あやつる。" },
	evolveFrom: { ja: "ノズパス" },
	weight: "340.0 kg",
	attacks: [
		{
			name: { ja: "いわなだれ" },
			cost: ["Fighting", "Colorless"],
			damage: 20,
			effect: { ja: "相手のベンチポケモン2匹にも、それぞれ10ダメージ。" },
		},
		{
			name: { ja: "トリプルノーズ" },
			cost: ["Metal", "Colorless", "Colorless"],
			damage: "50+",
			effect: { ja: "コインを3回投げ、オモテ×20ダメージを追加。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 3,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [476],
};

export default card;
