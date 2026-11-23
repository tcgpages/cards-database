import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "豪力",
		ja: "ゴーリキー"
	},

	illustrator: "AKIRA EGAWA",

	category: "Pokemon",

	hp: 110,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "因為肉體非常強韌，所以戴著力量限制腰帶來控制力量。",
		ja: "すごく 強靭な 肉体なので パワーセーブ ベルトを つけて 強さを 制御している。"
	},

	evolveFrom: {
		ja: "ワンリキー"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "踢倒",
				ja: "けたぐり"
			},
			damage: 30,
			cost: [
				"Fighting"
			]
		},
		{
			name: {
				'zh-tw': "狂毆",
				ja: "ぶんなぐる"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則增加70點傷害。",
				ja: "コインを1回投げオモテなら、70ダメージ追加。"
			},
			damage: "50+",
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		67
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
