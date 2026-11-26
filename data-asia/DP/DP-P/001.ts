import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "リオル" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",
	level: 7,
	description: { ja: "からだから はっする はどうは こわいとき かなしいときに つよまり ピンチを なかまに つたえる。" },
	weight: "20.2 kg",
	attacks: [
		{
			name: { ja: "けりつける" },
			cost: ["Fighting"],
			damage: 30,
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [447],
};

export default card;
