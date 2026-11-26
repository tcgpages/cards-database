import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "メガヤンマ" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",
	level: 42,
	description: { ja: "はばたいたときの しょうげきはで あいての からだの うちがわに ちめいてきな ダメージを あたえる。" },
	evolveFrom: { ja: "ヤンヤンマ" },
	weight: "51.5 kg",
	attacks: [
		{
			name: { ja: "ちょうおんぱ" },
			cost: ["Grass"],
			effect: { ja: "コインを1回投げオモテなら、相手をこんらんにする。" },
		},
		{
			name: { ja: "エアスラッシュ" },
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			damage: 70,
			effect: { ja: "コインを1回投げウラなら、自分のエネルギーを1個トラッシュ。" },
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
	dexId: [469],
};

export default card;
