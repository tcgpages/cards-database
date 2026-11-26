import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ドクロッグ" },
	illustrator: "Daisuke Ito",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",
	level: 39,
	description: { ja: "こぶしの トゲからは かすりきずでも いのちを おとすほどの もうどくを ぶんぴつしている。" },
	evolveFrom: { ja: "グレッグル" },
	weight: "44.4 kg",
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "どくぶくろ" },
			effect: { ja: "相手のどくのポケモンが進化・退化・レベルアップしても、どくは回復しない。" },
		},
	],
	attacks: [
		{
			name: { ja: "こぶしのトゲ" },
			cost: ["Psychic", "Colorless"],
			damage: 30,
			effect: { ja: "相手をどくにする。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [454],
};

export default card;
