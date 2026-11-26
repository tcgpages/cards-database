import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ピカチュウ" },
	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: { ja: "よわった なかまの ピカチュウに でんきをながし ショックをあたえて げんきを わけることも ある。" },
	weight: "6.0 kg",
	stage: "Basic",
	level: 23,
	attacks: [
		{
			name: { ja: "じゅうでん" },
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げオモテなら、自分の山札の{L}エネルギーを1枚、自分につける。その後、山札を切る。" },
		},
		{
			name: { ja: "10まんボルト" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			effect: { ja: "自分のエネルギーをすべてトラッシュ。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "+10" }],
	resistances: [{ type: "Metal", value: "-20" }],
	retreat: 1,
	dexId: [25],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
