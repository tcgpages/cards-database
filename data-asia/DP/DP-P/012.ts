import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "フワンテ" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	level: 17,
	description: { ja: "ひとや ポケモンの たましいが かたまって うまれた ポケモン。 ジメジメした きせつが だいすき。" },
	weight: "1.2 kg",
	attacks: [
		{
			name: { ja: "かぜではこぶ" },
			cost: ["Psychic"],
			effect: { ja: "コインを1回投げオモテなら、自分のベンチポケモン1匹と、そのポケモンについているすべてのカードを、自分の山札にもどす。その後、山札を切る。" },
		},
		{
			name: { ja: "あやしいかぜ" },
			cost: ["Psychic", "Colorless"],
			damage: 10,
			effect: { ja: "コインを1回投げオモテなら、相手をこんらんにし、次の相手の番、相手はにげるができない。" },
		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [425],
};

export default card;
