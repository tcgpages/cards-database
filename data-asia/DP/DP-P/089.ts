import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "スカンプー" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],
	stage: "Basic",
	level: 14,
	description: { ja: "はなが まがるほど ひどい においの えきたいを おしりから ふきだして おそってきた てきを おいはらう。" },
	weight: "19.2 kg",
	attacks: [
		{
			name: { ja: "どくガス" },
			cost: ["Darkness"],
			effect: { ja: "コインを1回投げオモテなら、相手をどくにする。" },
		},
		{
			name: { ja: "きりさく" },
			cost: ["Colorless", "Colorless"],
			damage: 20,
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [434],
};

export default card;
