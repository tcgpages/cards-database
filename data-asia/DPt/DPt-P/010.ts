import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "マルマインG[ギンガ]" },
	illustrator: "Yusuke Ishikawa",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",
	level: 38,
	attacks: [
		{
			name: { ja: "すてみボム" },
			cost: ["Lightning"],
			effect: { ja: "相手のポケモン全員に、それぞれ20ダメージ。自分にも100ダメージ。" },
		},
		{
			name: { ja: "エネリフレクト" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: { ja: "自分のエネルギーを1個、自分のベンチポケモンにつけ替える。（自分のベンチポケモンがいないなら、この効果はなくなる。）" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Metal", value: "-20" }],
	retreat: 1,
	dexId: [101],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
