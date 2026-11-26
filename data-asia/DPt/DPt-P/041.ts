import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "アルセウス" },
	illustrator: "Kunihiko Yuyama",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	description: { ja: "なにも ない ばしょに あった タマゴのなかから すがたを あらわし せかいを うみだしたと されている。" },
	weight: "320.0 kg",
	stage: "Basic",
	level: 100,
	attacks: [
		{
			name: { ja: "さばきのつぶて" },
			damage: 80,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: { ja: "自分のエネルギーをすべてトラッシュし、相手のベンチポケモン全員にも、それぞれ10ダメージ。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [],
	retreat: 2,
	dexId: [493],
	effect: { ja: "このカードは、デッキに何枚でも入れられる。" },
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
