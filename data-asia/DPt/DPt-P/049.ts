import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ミュウツー" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	weight: "122.0 kg",
	stage: "Basic",
	level: 42,
	attacks: [
		{
			name: { ja: "さいみんはどう" },
			damage: 10,
			cost: ["Colorless"],
			effect: { ja: "相手をねむりにする。" },
		},
		{
			name: { ja: "サイコキネシス" },
			damage: "40+",
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: { ja: "相手のエネルギー×10ダメージを追加。" },
		},
	],
	weaknesses: [{ type: "Psychic", value: "+20" }],
	resistances: [],
	retreat: 2,
	dexId: [150],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
