import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "フワライドFB[フロンティアブレーン]" },
	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	stage: "Basic",
	level: 50,
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "ポンプアップ" },
			effect: { ja: "相手のサイドの枚数が3枚以下なら、このポケモンの最大HPは「40」大きくなる。" },
		},
	],
	attacks: [
		{
			name: { ja: "シャドーボール" },
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: { ja: "相手のベンチポケモン1匹に、40ダメージ。このワザのダメージは、相手のベンチポケモンの弱点・抵抗力の影響を受ける。" },
		},
	],
	weaknesses: [{ type: "Darkness", value: "×2" }],
	resistances: [{ type: "Colorless", value: "-20" }],
	retreat: 2,
	dexId: [426],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
