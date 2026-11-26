import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "カラナクシ にしのうみ" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",
	level: 25,
	description: { ja: "せいそくちにより ちがった かたちや いろを している。シンオウちほうでは 2しゅるいが かくにんされている。" },
	weight: "6.3 kg",
	attacks: [
		{
			name: { ja: "どろかけ" },
			cost: ["Colorless"],
			damage: 10,
		},
		{
			name: { ja: "じこさいせい" },
			cost: ["Water"],
			effect: { ja: "自分の{W}エネルギーを1個トラッシュし、自分のダメージカウンターをすべてとる。" },
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
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [422],
};

export default card;
