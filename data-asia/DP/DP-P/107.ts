import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ディアルガLV.X" },
	illustrator: "Ryo Ueda",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],
	stage: "LEVEL-UP",
	level: "X",
	evolveFrom: { ja: "ディアルガ" },
	abilities: [
		{
			type: "Poke-POWER",
			name: { ja: "タイムスキップ" },
			effect: {
				ja: "自分の番に1回使える。相手プレイヤーは、コインを2回投げる。すべてオモテなら、この番は終わる。すべてウラなら、次の相手の番の最初に、相手プレイヤーが山札からカードを1枚引いた後、すぐにその番は終わる。このパワーは、このポケモンが特殊状態なら使えない。",
			},
		},
	],
	attacks: [
		{
			name: { ja: "メタルフラッシュ" },
			cost: ["Metal", "Metal", "Colorless", "Colorless"],
			damage: 80,
			effect: { ja: "次の自分の番、自分は「メタルフラッシュ」を使えない。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 2,
	effect: { ja: "このカードは、バトル場のディアルガに重ねてレベルアップさせる。\nレベルアップ前のワザ・ポケパワーも使うことができ、ポケボディーもはたらく。" },
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [483],
};

export default card;
