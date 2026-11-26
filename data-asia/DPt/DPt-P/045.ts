import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "クレセリア" },
	illustrator: "Wataru Kawahara",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	description: { ja: "みかづきに ちかい よるほど しっぽから のびる オーロラは ながく うつくしくなる。" },
	weight: "85.6 kg",
	stage: "Basic",
	level: 62,
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "みかづきのオーラ" },
			effect: { ja: "自分の場に「ダークライ」がいるなら、ポケモンチェックのたび、このポケモンのダメージカウンターを1個とる。" },
		},
	],
	attacks: [
		{
			name: { ja: "ルナフライト" },
			damage: "80-",
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: { ja: "このワザのダメージは、自分のダメージカウンター×10ダメージぶん、小さくなる。" },
		},
	],
	weaknesses: [{ type: "Psychic", value: "×2" }],
	resistances: [],
	retreat: 2,
	dexId: [488],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
