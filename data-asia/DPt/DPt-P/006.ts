import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ドータクンG[ギンガ]" },
	illustrator: "Makoto Imai",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],
	stage: "Basic",
	level: 58,
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "ギンガスイッチ" },
			effect: { ja: "自分の番に1回使える。自分のSPポケモンのエネルギーを1個選び、自分の別のポケモンにつけ替える。その後、このポケモンに、ダメージカウンターを2個のせる。このパワーは、このポケモンが特殊状態なら使えない。" },
		},
	],
	attacks: [
		{
			name: { ja: "ねんどうは" },
			damage: 40,
			cost: ["Metal", "Colorless", "Colorless"],
			effect: { ja: "ダメージカウンターがのっている相手のベンチポケモン全員にも、それぞれ10ダメージ。" },
		},
	],
	weaknesses: [{ type: "Psychic", value: "×2" }],
	resistances: [{ type: "Fire", value: "-20" }],
	retreat: 3,
	dexId: [437],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
