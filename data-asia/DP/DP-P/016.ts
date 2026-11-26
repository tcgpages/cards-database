import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ペラップ" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",
	level: 27,
	description: { ja: "ひとの ことばを おぼえて なく。なかまが いっかしょに あつまると みんな おなじ ことばを おぼえる。" },
	weight: "1.9 kg",
	attacks: [
		{
			name: { ja: "さきどり" },
			cost: ["Colorless"],
			effect: { ja: "自分の山札からカードを1枚引く。" },
		},
		{
			name: { ja: "おんち" },
			cost: ["Colorless"],
			damage: 10,
			effect: { ja: "コインを1回投げオモテなら、相手をこんらんにする。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [441],
};

export default card;
