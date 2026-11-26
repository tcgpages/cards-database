import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ハヤシガメ" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",
	level: 21,
	description: { ja: "もりの なかの みずべで くらす。ひるまは もりの そとに でて こうらの きに ひかりを あてる。" },
	evolveFrom: { ja: "ナエトル" },
	weight: "97.0 kg",
	attacks: [
		{
			name: { ja: "こうごうせい" },
			cost: ["Grass"],
			effect: { ja: "自分の山札の{G}エネルギーを1枚、自分のポケモンにつける。その後、山札を切る。" },
		},
		{
			name: { ja: "いあいぎり" },
			cost: ["Grass", "Colorless", "Colorless"],
			damage: 50,
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20",
		},
	],
	retreat: 3,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [388],
};

export default card;
