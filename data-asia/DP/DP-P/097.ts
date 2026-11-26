import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "フカマル" },
	illustrator: "Hiroki Fuchino",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	level: 9,
	description: { ja: "どうくつの ちいさな よこあなを ねぐらにする。えものが ちかづくと すばやく とびだして つかまえる。" },
	weight: "20.5 kg",
	attacks: [
		{
			name: { ja: "つきとばす" },
			cost: ["Colorless"],
			damage: 10,
			effect: { ja: "相手を相手のベンチポケモンと入れ替える。入れ替えるベンチポケモンは相手プレイヤーが選ぶ。" },
		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [443],
};

export default card;
