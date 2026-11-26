import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "グレッグル" },
	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",
	level: 19,
	description: { ja: "どくぶくろを おおきく ふくらませて ゴボゴボと ぶきみな おとを だす。 あいてを いかくするためだ。" },
	weight: "23.0 kg",
	attacks: [
		{
			name: { ja: "はたきおとす" },
			cost: ["Colorless"],
			effect: { ja: "コインを1回投げオモテなら、相手の手札から、オモテを見ないでカードを1枚選び、トラッシュ。" },
		},
		{
			name: { ja: "いきいき" },
			cost: ["Psychic", "Psychic"],
			damage: 30,
			effect: { ja: "自分の場に「ナエトル」がいるなら、相手に与えたダメージぶんのダメージカウンターを、自分からとる。" },
		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10",
		},
	],
	resistances: [],
	retreat: 2,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [453],
};

export default card;
