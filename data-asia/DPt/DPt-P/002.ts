import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "マナフィ" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	description: { ja: "うまれたときから そなわっている ふしぎな ちからを つかうと どんな ポケモンとも こころが かよいあう。" },
	weight: "1.4 kg",
	stage: "Basic",
	level: 25,
	attacks: [
		{
			name: { ja: "ダイビング" },
			cost: ["Water"],
			effect: { ja: "自分の山札のカードを上から7枚見て、その中のカードを1枚、手札に加える。その後、残りのカードを山札にもどし、山札を切る。" },
		},
		{
			name: { ja: "みずのひかり" },
			cost: ["Water"],
			effect: { ja: "相手のポケモン1匹に、20ダメージ。その後、そのポケモンに与えたダメージぶんのダメージカウンターを、自分からとる。" },
		},
	],
	weaknesses: [{ type: "Lightning", value: "+20" }],
	resistances: [],
	retreat: 1,
	dexId: [490],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
