import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ミミロル" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	level: 11,
	description: { ja: "まるめた みみを いきおいよく のばして あいてに たたきつける。 おとなでも とびあがるほど いたい。" },
	weight: "5.5 kg",
	attacks: [
		{
			name: { ja: "はねる" },
			cost: ["Colorless"],
			damage: 10,
		},
		{
			name: { ja: "とびげり" },
			cost: ["Colorless", "Colorless"],
			damage: 10,
			effect: { ja: "相手のベンチポケモン1匹にも、10ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [427],
};

export default card;
