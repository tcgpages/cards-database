import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "マスキッパ" },
	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	level: 32,
	description: { ja: "あまい においの だえきで えものを おびきよせ おおあごで がぶり。 1にち かけて えものを たべる。" },
	weight: "27.0 kg",
	attacks: [
		{
			name: { ja: "まるのみ" },
			cost: ["Grass", "Colorless"],
			damage: 30,
			effect: { ja: "相手の残りHPが、自分の残りHPより少ないなら、このワザのダメージは「60」になる。" },
		},
		{
			name: { ja: "しぼりとる" },
			cost: ["Grass", "Grass"],
			damage: 20,
			effect: { ja: "コインを1回投げオモテなら、相手をマヒにし、相手のエネルギーを1個トラッシュ。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [455],
};

export default card;
