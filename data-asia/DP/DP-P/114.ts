import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ライチュウ" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Stage1",
	level: 39,
	description: { ja: "でんげきは １０まんボルト。 じぶんの なんばいも おおきい あいてを いちげきで きぜつさせる。" },
	evolveFrom: { ja: "ピカチュウ" },
	weight: "30.0 kg",
	attacks: [
		{
			name: { ja: "たたきつける" },
			cost: ["Colorless", "Colorless"],
			damage: "30×",
			effect: { ja: "コインを2回投げ、オモテ×30ダメージ。" },
		},
		{
			name: { ja: "ハイボルト" },
			cost: ["Lightning", "Lightning", "Lightning"],
			damage: 60,
			effect: { ja: "この番に、自分が「ピカチュウ」から進化していたなら、このワザのダメージは「100」になる。" },
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
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [26],
};

export default card;
