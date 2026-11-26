import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "カラナクシ ひがしのうみ" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	level: 19,
	description: { ja: "みずべに せいそくする。せいそくちの かんきょうに あわせて からだの かたちが へんかした。" },
	weight: "6.3 kg",
	attacks: [
		{
			name: { ja: "なみのり" },
			cost: ["Colorless"],
			damage: 10,
		},
		{
			name: { ja: "だくりゅう" },
			cost: ["Water", "Colorless"],
			damage: 20,
			effect: { ja: "相手のベンチポケモン1匹にも、10ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 2,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [422],
};

export default card;
