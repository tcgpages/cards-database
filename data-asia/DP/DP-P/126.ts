import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "カビゴン" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",
	level: 37,
	description: { ja: "ねむっているとき いがいは エサを たべつづける。１にちに ４００キロ たべないと まんぷくに ならない。" },
	weight: "460.0 kg",
	attacks: [
		{
			name: { ja: "ひろいあつめる" },
			cost: [],
			effect: { ja: "自分のトラッシュの基本エネルギーを４枚まで選び、相手プレイヤーに見せてから、手札に加える。" },
		},
		{
			name: { ja: "ねころぶ" },
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			damage: 60,
			effect: { ja: "コインを１回投げオモテなら、自分と相手をねむりにする。ウラなら、自分をねむりにする。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20",
		},
	],
	resistances: [],
	retreat: 4,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [143],
};

export default card;
