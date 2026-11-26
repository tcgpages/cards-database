import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ブイゼル" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	level: 17,
	description: { ja: "2ほんの しっぽを スクリューの ように まわして およぐ。もぐる ときは うきぶくろが しぼむ。" },
	weight: "29.5 kg",
	attacks: [
		{
			name: { ja: "うずしお" },
			cost: ["Water"],
			effect: { ja: "コインを1回投げオモテなら、相手のエネルギーを1個トラッシュ。" },
		},
		{
			name: { ja: "ちょっぱや" },
			cost: ["Water", "Water"],
			damage: 30,
			effect: { ja: "自分の場に「パチリス」がいるなら、コインを1回投げる。オモテなら、次の相手の番、自分はワザのダメージや効果を受けない。" },
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [418],
};

export default card;
