import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "レントラーGL［ジムリーダー］" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Basic",
	level: 48,
	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: { ja: "トラッシュボルト" },
			damage: 70,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: { ja: "自分の手札のエネルギーを1枚トラッシュ。（トラッシュできないなら、このワザは失敗。）" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Metal", value: "-20" }],
	retreat: 1,
	dexId: [405],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
