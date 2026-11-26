import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ゼニガメ" },
	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	weight: "9.0 kg",
	stage: "Basic",
	level: 12,
	attacks: [
		{
			name: { ja: "おみやげえらび" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札のカードを上から2枚見て、どちらか1枚を手札に加える。その後、残りの1枚を、山札の一番下にもどす。" },
		},
		{
			name: { ja: "なみのり" },
			damage: 40,
			cost: ["Water", "Colorless", "Colorless"],
		},
	],
	weaknesses: [{ type: "Lightning", value: "+10" }],
	resistances: [],
	retreat: 1,
	dexId: [7],
	variants: [{ type: "normal", stamp: ["pokemon-center"] }],
	rarity: "Promo",
};

export default card;
