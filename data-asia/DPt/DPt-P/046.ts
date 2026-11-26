import { Card } from "../../../interfaces";
import Set from "../DPt-P";

const card: Card = {
	set: Set,
	name: { ja: "ダークライ" },
	illustrator: "Wataru Kawahara",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	description: { ja: "じぶんを まもるために まわりの ひとや ポケモンに あくむをみせるが ダークライに わるぎは ないのだ。" },
	weight: "50.5 kg",
	stage: "Basic",
	level: 61,
	abilities: [
		{
			type: "Poke-BODY",
			name: { ja: "あんこくのオーラ" },
			effect: { ja: "自分の場に「クレセリア」がいるなら、このポケモンが使うワザの、バトルポケモンに与えるダメージは、すべて「+20」される。" },
		},
	],
	attacks: [
		{
			name: { ja: "さいみんはどう" },
			damage: 60,
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: { ja: "コインを1回投げオモテなら、相手をねむりにする。" },
		},
	],
	weaknesses: [{ type: "Fighting", value: "×2" }],
	resistances: [{ type: "Psychic", value: "-20" }],
	retreat: 2,
	dexId: [491],
	variants: [{ type: "holo" }],
	rarity: "Promo",
};

export default card;
