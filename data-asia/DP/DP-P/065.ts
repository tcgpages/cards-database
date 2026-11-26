import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "エレブー" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	level: 32,
	weight: "30.0 kg",
	attacks: [
		{
			name: { ja: "でんきショック" },
			cost: ["Lightning"],
			damage: 10,
			effect: { ja: "コインを1回投げオモテなら、相手をマヒにする。" },
		},
		{
			name: { ja: "かみなり" },
			cost: ["Lightning", "Lightning", "Colorless"],
			damage: 60,
			effect: { ja: "コインを1回投げウラなら、自分にも30ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [125],
};

export default card;
