import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ミミロップ" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	level: 33,
	description: { ja: "けいかいしんの つよい ポケモン。 きけんを かんじると ふわふわした みみさきの けで からだを つつむ。" },
	evolveFrom: { ja: "ミミロル" },
	weight: "33.3 kg",
	attacks: [
		{
			name: { ja: "いやしのねがい" },
			cost: ["Colorless"],
			effect: { ja: "ウラが出るまでコインを投げ続け、オモテの数ぶんのダメージカウンターを、自分のポケモン1匹からとる。" },
		},
		{
			name: { ja: "はねまわる" },
			cost: ["Colorless", "Colorless", "Colorless"],
			damage: 30,
			effect: { ja: "相手のベンチポケモン1匹にも、20ダメージ。のぞむなら、自分を自分のベンチポケモンと入れ替えてよい。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [428],
};

export default card;
