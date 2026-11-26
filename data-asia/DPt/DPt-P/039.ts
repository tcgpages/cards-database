import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ガーメイル" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	weight: "23.3 kg",
	stage: "Stage1",
	level: 43,
	evolveFrom: { ja: "ミノムッチ" },
	attacks: [
		{
			name: { ja: "ミノまつり" },
			cost: [],
			effect: { ja: "自分の山札から、「ミノムッチ」または「ミノマダム」を合計3枚まで選び、相手プレイヤーに見せてから、手札に加える。その後、山札を切る。" },
		},
		{
			name: { ja: "エネアシスト" },
			damage: 30,
			cost: ["Colorless"],
			effect: { ja: "自分のトラッシュの基本エネルギーを1枚、自分のベンチポケモンにつける。" },
		},
	],
	weaknesses: [{ type: "Fire", value: "+20" }],
	resistances: [{ type: "Fighting", value: "-20" }],
	retreat: 0,
	dexId: [414],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
