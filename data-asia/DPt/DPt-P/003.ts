import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ロトム" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: { ja: "でんきのような からだは いちぶの きかいに はいりこむことが できる。 そして そのからだで いたずらする。" },
	weight: "0.3 kg",
	stage: "Basic",
	level: 46,
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "タイプシフト" },
			effect: { ja: "自分の番に1回使える。この番の終わりまで、このポケモンのタイプは{P}タイプになる。" },
		},
	],
	attacks: [
		{
			name: { ja: "ポルターガイスト" },
			damage: "30+",
			cost: ["Psychic", "Colorless"],
			effect: { ja: "相手の手札を見て、その中の「トレーナーのカード」の枚数×10ダメージを追加。" },
		},
	],
	weaknesses: [{ type: "Darkness", value: "+20" }],
	resistances: [{ type: "Colorless", value: "-20" }],
	retreat: 1,
	dexId: [479],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
