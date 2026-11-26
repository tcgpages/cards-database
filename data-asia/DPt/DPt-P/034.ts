import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ポニータ" },
	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 40,
	types: ["Fire"],
	weight: "30.0 kg",
	stage: "Basic",
	level: 8,
	attacks: [
		{
			name: { ja: "かえん" },
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],
	weaknesses: [{ type: "Water", value: "+10" }],
	resistances: [],
	retreat: 1,
	dexId: [77],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
