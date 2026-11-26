import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "黑眼鱷",
		ja: "メグロコ"
	},

	illustrator: "Pani Kobayashi",

	category: "Pokemon",

	hp: 70,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "因為還不太擅長狩獵，主要是吃倒斃在沙漠裡的東西維生，被稱為沙漠的清道夫。",
		ja: "まだ 狩りは 下手なので おもに 砂漠で 行き倒れたものを 食う。 砂漠の掃除屋と 呼ばれる。"
	},

	stage: "Basic",

	attacks: [
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
		551
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
