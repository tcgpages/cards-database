import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ヒードラン" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Basic",
	level: 41,
	description: { ja: "かざんの ほらあなに せいそく。 じゅうじの ツメを くいこませて カベや てんじょうを はいまわる。" },
	weight: "430.0 kg",
	attacks: [
		{
			name: { ja: "のしかかり" },
			cost: ["Colorless", "Colorless"],
			damage: 20,
			effect: { ja: "コインを1回投げオモテなら、相手をマヒにする。" },
		},
		{
			name: { ja: "ほのおのうず" },
			cost: ["Fire", "Fire", "Fire", "Colorless"],
			damage: 90,
			effect: { ja: "自分の基本エネルギーを2個トラッシュ。（トラッシュできないなら、このワザは失敗。）" },
		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+30",
		},
	],
	resistances: [],
	retreat: 3,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [485],
};

export default card;
