import { Card } from "../../../interfaces";
import Set from "../DP-P";

const card: Card = {
	set: Set,
	name: { ja: "ルクシオ" },
	illustrator: "Ken Sugimori",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	stage: "Stage1",
	level: 19,
	description: { ja: "いっぱつで きぜつさせるほどの でんりゅうを ツメから ながす。すうひきの グループで くらす。" },
	evolveFrom: { ja: "コリンク" },
	weight: "30.5 kg",
	attacks: [
		{
			name: { ja: "ツメをだす" },
			cost: ["Colorless"],
			damage: "10+",
			effect: { ja: "コインを1回投げオモテなら、30ダメージを追加。" },
		},
		{
			name: { ja: "かみなりのキバ" },
			cost: ["Lightning", "Lightning"],
			damage: 30,
			effect: { ja: "コインを1回投げオモテなら、相手をマヒにする。" },
		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+20",
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20",
		},
	],
	retreat: 0,
	variants: [
		{ type: "holo" },
	],
	rarity: "Promo",
	dexId: [404],
};

export default card;
