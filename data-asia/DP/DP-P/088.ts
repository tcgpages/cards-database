import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "リオル" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",
	level: 6,
	description: { ja: "しなやかで きょうじんな からだ。３つの やまと ２つの たにを ひとばんで こえることが できる。" },
	weight: "20.2 kg",
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "せいしんりょく" },
			effect: { ja: "このポケモンはマヒにならず、このポケモンが受けているマヒは、すべて回復する。" },
		},
	],
	attacks: [
		{
			name: { ja: "でんこうせっか" },
			cost: ["Fighting"],
			damage: "10+",
			effect: { ja: "コインを1回投げオモテなら、10ダメージを追加。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [447],
};

export default card;
