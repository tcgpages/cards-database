import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雙刃丸",
		ja: "フタチマル"
	},

	illustrator: "Megumi Higuchi",

	category: "Pokemon",

	hp: 90,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "經過嚴格的修練後，每隻雙刃丸都能習得不同套路的扇貝貝刀法。",
		ja: "きびしい 修業の すえ フタチマルごとに 異なる 型の ホタチさばきを 習得する。"
	},

	evolveFrom: {
		ja: "ミジュマル"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "水槍",
				ja: "みずでっぽう"
			},
			damage: 20,
			cost: [
				"Water"
			]
		},
		{
			name: {
				'zh-tw': "水流清洗",
				ja: "アクアウォッシャー"
			},
			effect: {
				'zh-tw': "若希望，選擇1個對手的戰鬥寶可夢身上附加的能量，放回對手的手牌。",
				ja: "のぞむなら、相手のバトルポケモンについているエネルギーを1個選び、相手の手札にもどす。"
			},
			damage: 50,
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		502
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
