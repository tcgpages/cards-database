import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ヒコザル" },
	illustrator: "Daisuke Ito",
	category: "Pokemon",
	hp: 40,
	types: ["Fire"],
	stage: "Basic",
	level: 6,
	description: { ja: "おしりの ほのおは おなかで つくられた ガスが ねんりょう。あめに ぬれても きえない。" },
	weight: "6.2 kg",
	attacks: [
		{
			name: { ja: "ほのお" },
			cost: ["Fire"],
			damage: 20,
		},
		{
			name: { ja: "とびかかる" },
			cost: ["Colorless", "Colorless"],
			damage: 40,
			effect: { ja: "コインを1回投げウラなら、このワザは失敗。" },
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [390],
};

export default card;
