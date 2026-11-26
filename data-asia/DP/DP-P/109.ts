import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "現実世界のギラティナ" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Basic",
	level: 62,
	weight: "750.0 kg",
	attacks: [
		{
			name: { ja: "りゅうのいぶき" },
			cost: ["Psychic", "Colorless"],
			damage: 20,
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。オモテなら、相手をマヒにする。" },
		},
		{
			name: { ja: "シャドークロー" },
			cost: ["Psychic", "Psychic", "Colorless", "Colorless"],
			damage: 60,
			effect: { ja: "相手の手札から、オモテを見ないでカードを1枚選び、トラッシュ。" },
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20",
		},
	],
	retreat: 3,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [487],
};

export default card;
