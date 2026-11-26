import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ムウマージGL［ジムリーダー］ LV.X" },
	illustrator: "Kent Kanetsuna",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ムウマージGL［ジムリーダー］" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "マジカルリターン" },
			effect: { ja: "自分の番に何回でも使える。自分のポケモンについている[ポケモンのどうぐ」または「ワザマシン」を１枚、自分の手札にもどす。このパワーは、このポケモンが特殊状態なら使えない。" },
		},
	],
	attacks: [
		{
			name: { ja: "やみのまじない" },
			cost: ["Psychic", "Psychic", "Colorless"],
			effect: { ja: "自分の手札の枚数ぶんのダメージカウンターを、相手にのせる。このワザでのせられるダメージカウンターは、８個まで。" },
		},
	],
	weaknesses: [{ type: "Darkness", value: "×2" }],
	resistances: [{ type: "Colorless", value: "-20" }],
	retreat: 1,
	dexId: [429],
	effect: { ja: "このカードは、バトル場のムウマージGL[ジムリーダー]に重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
