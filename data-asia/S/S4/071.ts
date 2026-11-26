import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "混混鱷",
		ja: "ワルビル"
	},

	illustrator: "sowsow",

	category: "Pokemon",

	hp: 90,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "會把獵物的一部份埋在沙子裡，當成狩獵失敗時的儲備糧食。",
		ja: "獲物の １部は 砂の中に 埋めて 狩りが 失敗したときの 非常食に するのだ。"
	},

	evolveFrom: {
		ja: "メグロコ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "咬住",
				ja: "かみつく"
			},
			damage: 20,
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				'zh-tw': "亂挖",
				ja: "ほりあらす"
			},
			effect: {
				'zh-tw': "將對手的牌庫上方3張卡丟棄。",
				ja: "相手の山札を上から3枚トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		552
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
