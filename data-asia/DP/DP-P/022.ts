import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ムクバード" },
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",
	level: 21,
	description: { ja: "むしポケモンを ねらって もりや そうげんを とびまわる。 おおきな むれで こうどうする。" },
	evolveFrom: { ja: "ムックル" },
	weight: "15.5 kg",
	attacks: [
		{
			name: { ja: "ふきとばし" },
			cost: ["Colorless", "Colorless"],
			damage: 20,
			effect: { ja: "相手を相手のベンチポケモンと入れ替える。入れ替えるベンチポケモンは相手プレイヤーが選ぶ。" },
		},
		{
			name: { ja: "わしづかみ" },
			cost: ["Colorless", "Colorless"],
			damage: 20,
			effect: { ja: "次の相手の番、このワザを受けた相手はにげるができない。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20",
		},
	],
	retreat: 0,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [397],
};

export default card;
