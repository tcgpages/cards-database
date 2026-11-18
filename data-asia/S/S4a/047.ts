import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雪吞蟲",
		ja: "ユキハミ"
	},

	illustrator: "Tika Matsuno",

	category: "Pokemon",

	hp: 50,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "能吐出帶著冷氣的絲。會用絲把自己掛在樹枝上，一邊裝成冰柱一邊睡覺。",
		ja: "冷気の 混ざった 糸を 吐く。 糸で 体を 枝に 巻きつけ 氷柱の 振りをして 眠るのだ。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "呼朋引伴",
				ja: "なかまをよぶ"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
			},
			cost: [
				"Water"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		872
	]
}

export default card
