import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "チェリンボ" },
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",
	level: 7,
	description: { ja: "しんかに ひつような えいようぶんが ちいさい たまに ためられている。とても あまくて おいしい らしい。" },
	weight: "3.3 kg",
	attacks: [
		{
			name: { ja: "ねむりごな" },
			cost: ["Grass"],
			effect: { ja: "相手をねむりにする。" },
		},
		{
			name: { ja: "やどりぎのタネ" },
			cost: ["Grass", "Colorless"],
			damage: 20,
			effect: { ja: "相手にダメージを与えたなら、自分のダメージカウンターを1個とる。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10",
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
	dexId: [420],
};

export default card;
