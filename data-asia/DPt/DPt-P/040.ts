import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "アルセウス" },
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	description: { ja: "なにも ない ばしょに あった タマゴのなかから すがたを あらわし せかいを うみだしたと されている。" },
	weight: "320.0 kg",
	stage: "Basic",
	level: 100,
	attacks: [
		{
			name: { ja: "はもんのうねり" },
			cost: [],
			effect: { ja: "自分の場に「アルセウス」が6匹いて、それらがそれぞれちがうタイプなら、自分の山札の基本エネルギーを6枚まで選び、自分のポケモンそれぞれに1枚ずつつける。その後、山札を切る。" },
		},
		{
			name: { ja: "てんのやり" },
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "相手のポケモン1匹に、80ダメージ。自分のエネルギーをすべてはがしてロストゾーンにおく。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [],
	retreat: 1,
	dexId: [493],
	effect: { ja: "このカードは、デッキに何枚でも入れられる。" },
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
