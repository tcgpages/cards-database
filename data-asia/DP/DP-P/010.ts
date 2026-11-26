import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "コリンク" },
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	level: 7,
	description: { ja: "きけんを かんじると ぜんしんの たいもうが ひかる。あいてが めを くらませている あいだに にげる。" },
	weight: "9.5 kg",
	attacks: [
		{
			name: { ja: "スパーク" },
			cost: ["Lightning"],
			damage: 10,
			effect: { ja: "相手のベンチポケモン1匹にも、10ダメージ。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10",
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20",
		},
	],
	retreat: 1,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [403],
};

export default card;
