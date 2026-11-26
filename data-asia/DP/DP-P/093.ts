import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ジバコイル" },
	illustrator: "Kent Kanetsuna",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Stage2",
	level: 51,
	description: { ja: "とくしゅな じばの えいきょうで レアコイルが しんかした。３つの ユニットから じりょくを だす。" },
	evolveFrom: { ja: "レアコイル" },
	weight: "180.0 kg",
	attacks: [
		{
			name: { ja: "ミラーショット" },
			cost: ["Metal", "Colorless"],
			damage: 40,
			effect: { ja: "次の相手の番、このワザを受けた相手は、ワザを使うときコインを1回投げ、ウラならそのワザは失敗。" },
		},
		{
			name: { ja: "でんじスラッシュ" },
			cost: ["Lightning", "Metal", "Colorless", "Colorless"],
			damage: 100,
			effect: { ja: "自分の{L}エネルギーをすべてトラッシュ。" },
		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+30",
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20",
		},
	],
	retreat: 2,
	variants: [
		{ type: "normal" },
	],
	rarity: "Promo",
	dexId: [462],
};

export default card;
