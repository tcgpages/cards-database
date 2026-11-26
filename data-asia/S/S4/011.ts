import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "火恐龍",
		ja: "リザード"
	},

	illustrator: "SATOSHI NAKAI",

	category: "Pokemon",

	hp: 90,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "揮動燃燒著火焰的尾巴，用鋒利的爪子撕裂對手。性情十分粗暴。",
		ja: "燃える しっぽを 振りまわし するどい ツメで 相手を 切り裂く 荒々しい 性格。"
	},

	evolveFrom: {
		ja: "ヒトカゲ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "劈開",
				ja: "きりさく"
			},
			damage: 20,
			cost: [
				"Fire"
			]
		},
		{
			name: {
				'zh-tw': "森林火災",
				ja: "やまかじ"
			},
			effect: {
				'zh-tw': "將自己的牌庫上方3張卡丟棄。",
				ja: "自分の山札を上から3枚トラッシュする。"
			},
			damage: 60,
			cost: [
				"Fire",
				"Fire"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		5
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
