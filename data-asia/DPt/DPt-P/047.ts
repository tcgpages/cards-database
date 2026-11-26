import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "プリン" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	description: { ja: "つぶらな ひとみが ゆれるとき だれもが ねむくなってしまう こもりうたを うたいはじめる。" },
	weight: "5.5 kg",
	stage: "Basic",
	level: 25,
	attacks: [
		{
			name: { ja: "いっしょにおひるね" },
			cost: ["Colorless"],
			effect: { ja: "自分と相手をねむりにする。" },
		},
		{
			name: { ja: "たまのりアタック" },
			damage: "30+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: { ja: "相手がねむりなら、20ダメージを追加。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "+10" }],
	resistances: [],
	retreat: 1,
	dexId: [39],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
