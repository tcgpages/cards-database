import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ギザみみピチューM[ムービー]" },
	illustrator: "Gosho Aoyama",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],
	stage: "Basic",
	level: 30,
	attacks: [
		{
			name: { ja: "ともだちパーティー" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札から、「名前にM[ムービー]がつくポケモン」を好きなだけ選び、自分のベンチに出す。その後、山札を切る。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Metal", value: "-20" }],
	retreat: 1,
	dexId: [172],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
