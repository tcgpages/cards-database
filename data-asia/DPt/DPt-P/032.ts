import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ペラップ" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	description: { ja: "ベロは にんげんのものに そっくり。 そのため にんげんの はなすことばを じょうずに まねることが できる。" },
	weight: "1.9 kg",
	stage: "Basic",
	level: 29,
	attacks: [
		{
			name: { ja: "アンコール" },
			cost: ["Colorless"],
			effect: { ja: "相手のワザを1つ選ぶ。次の相手の番、その相手は、そのワザしか使えない。" },
		},
		{
			name: { ja: "みだれづき" },
			damage: "20×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "コインを3回投げ、オモテ×20ダメージ。" },
		},
	],
	weaknesses: [{ type: "Lightning", value: "+10" }],
	resistances: [{ type: "Fighting", value: "-20" }],
	retreat: 1,
	dexId: [441],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
