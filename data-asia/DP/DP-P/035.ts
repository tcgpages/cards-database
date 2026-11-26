import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "チェリム" },
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	level: 26,
	description: { ja: "ひざしが つよくなると はなひらく。 つぼみの ときに たえしのんだ うっぷんを いっきに はらすのだ。" },
	evolveFrom: { ja: "チェリンボ" },
	weight: "9.3 kg",
	attacks: [
		{
			name: { ja: "なやみのタネ" },
			cost: ["Grass"],
			damage: 20,
			effect: { ja: "コインを1回投げオモテなら、相手をこんらんにする。" },
		},
		{
			name: { ja: "マジカルリーフ" },
			cost: ["Grass", "Grass"],
			damage: "20+",
			effect: { ja: "コインを1回投げオモテなら、20ダメージを追加し、自分のダメージカウンターを3個とる。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [421],
};

export default card;
