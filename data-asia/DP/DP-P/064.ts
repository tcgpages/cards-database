import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ブーバー" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	level: 27,
	description: { ja: "かざんの かこうで うまれそだった。 たいようと おなじような ほのおの ゆらめきが ぜんしんを おおう。" },
	weight: "44.5 kg",
	attacks: [
		{
			name: { ja: "ほのおパンチ" },
			cost: ["Colorless"],
			damage: 10,
		},
		{
			name: { ja: "スモッグ" },
			cost: ["Fire", "Colorless"],
			damage: 20,
			effect: { ja: "相手をどくにする。" },
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 2,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [126],
};

export default card;
