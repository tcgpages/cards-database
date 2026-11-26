import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ヒードラン" },
	illustrator: "Wataru Kawahara",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],
	description: { ja: "がんじょうな はがねの からだだが じぶんが はっする こうねつの ため ところどころ とけてしまっている。" },
	weight: "430.0 kg",
	stage: "Basic",
	level: 40,
	attacks: [
		{
			name: { ja: "ねつかそく" },
			cost: ["Fire"],
			effect: { ja: "自分のトラッシュの{R}エネルギーを2枚まで選び、自分のポケモン一匹につける。" },
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 80,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: { ja: "自分のエネルギーを1個トラッシュ。" },
		},
	],
	weaknesses: [{ type: "Water", value: "×2" }],
	resistances: [],
	retreat: 3,
	dexId: [485],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
