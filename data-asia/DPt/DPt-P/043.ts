import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ピカチュウM[ムービー] LV.X" },
	illustrator: "2009 Pikachu Project",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ピカチュウM[ムービー]" },
	attacks: [
		{
			name: { ja: "アイアンテール" },
			damage: "20×",
			cost: ["Colorless"],
			effect: { ja: "ウラが出るまでコインを投げ続け、オモテ×20ダメージ。" },
		},
		{
			name: { ja: "ボルテッカー" },
			damage: 100,
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: { ja: "自分にも20ダメージ。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Metal", value: "-20" }],
	retreat: 1,
	dexId: [25],
	effect: { ja: "このカードは、バトル場のピカチュウM[ムービー]に重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
