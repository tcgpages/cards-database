import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ガバイト" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	level: 33,
	description: { ja: "ほりだした ほうせきを すみかに あつめる しゅうせい。それを ねらう どろぼうが あとをたたない。" },
	evolveFrom: { ja: "フカマル" },
	weight: "56.0 kg",
	attacks: [
		{
			name: { ja: "すながくれ" },
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げオモテなら、次の相手の番、自分はワザのダメージや効果を受けない。" },
		},
		{
			name: { ja: "ふしぎなはどう" },
			cost: ["Colorless", "Colorless", "Colorless"],
			damage: 60,
			effect: { ja: "ダメージを与える前に、相手のダメージカウンターを2個とる。" },
		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [444],
};

export default card;
