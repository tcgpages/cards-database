import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ドクロッグG[ギンガ]" },
	illustrator: "Ryota Saito",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],
	stage: "Basic",
	level: 45,
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "にげかえる" },
			effect: { ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。コインを1回投げオモテなら、このポケモンとこのポケモンについているすべてのカードを、自分の手札にもどす。このパワーは、このポケモンが特殊状態なら使えない。" },
		},
	],
	attacks: [
		{
			name: { ja: "ポイズンリベンジ" },
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: { ja: "前の相手の番に、相手のワザのダメージで、自分のポケモンがきぜつしていたなら、40ダメージを追加し、相手をどくにする。" },
		},
	],
	weaknesses: [{ type: "Psychic", value: "×2" }],
	resistances: [],
	retreat: 2,
	dexId: [454],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
