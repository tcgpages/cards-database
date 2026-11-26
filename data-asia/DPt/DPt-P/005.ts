import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ダークライG[ギンガ]" },
	illustrator: "Makoto Imai",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Basic",
	level: 58,
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "あくむのオーラ" },
			effect: { ja: "ポケモンチェックのとき、ねむりから回復しなかった相手のポケモン全員に、ダメージカウンターを、それぞれ1個ずつのせる。" },
		},
	],
	attacks: [
		{
			name: { ja: "ダークスリープ" },
			damage: 50,
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: { ja: "ダメージを与えるとき、すでに相手にダメージカウンターがのっているなら、相手をねむりにする。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Psychic", value: "-20" }],
	retreat: 2,
	dexId: [491],
	variants: [{ type: "normal" }],
	rarity: "Promo",
};

export default card;
