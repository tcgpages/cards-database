import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ミミロル" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",
	level: 8,
	description: { ja: "きけんを かんじとると りょうみみを たてて けいかいする。さむい よるは けがわに かおを うずめて ねむる。" },
	weight: "5.5 kg",
	attacks: [
		{
			name: { ja: "ピヨピヨパンチ" },
			cost: ["Colorless"],
			damage: "10×",
			effect: { ja: "コインを2回投げ、オモテ×10ダメージ。" },
		},
		{
			name: { ja: "まるくなる" },
			cost: ["Colorless", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、次の相手の番、自分はワザのダメージを受けない。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 1,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [427],
};

export default card;
