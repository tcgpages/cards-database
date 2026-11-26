import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ナエトル" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	level: 10,
	description: { ja: "つちで できた せなかの こうらは みずを のむと さらに かたくなる。みずうみの ほとりで くらしている。" },
	weight: "10.2 kg",
	attacks: [
		{
			name: { ja: "たいあたり" },
			cost: [],
			damage: 10,
		},
		{
			name: { ja: "はっぱカッター" },
			cost: ["Grass"],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
			stamp: ["mcdonalds"],
		},
	],
	rarity: "Promo",
	dexId: [387],
};

export default card;
