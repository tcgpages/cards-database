import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "レジギガス" },
	illustrator: "Kent Kanetsuna",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",
	level: 42,
	description: { ja: "なわで しばった たいりくを ひっぱって うごかしたという でんせつが のこされている。" },
	weight: "420.0 kg",
	attacks: [
		{
			name: { ja: "のしかかり" },
			cost: ["Colorless", "Colorless", "Colorless"],
			damage: 20,
			effect: { ja: "コインを1回投げオモテなら、相手をマヒにする。" },
		},
		{
			name: { ja: "ダブルスタンプ" },
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			damage: "50+",
			effect: { ja: "コインを2回投げ、オモテ×20ダメージを追加。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	resistances: [],
	retreat: 4,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [486],
};

export default card;
