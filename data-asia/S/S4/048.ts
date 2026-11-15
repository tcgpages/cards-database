import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "心蝙蝠",
		ja: "ココロモリ"
	},

	illustrator: "Kagemaru Himeno",

	category: "Pokemon",

	hp: 100,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "在發出極其強力的音波後會陷入疲勞，暫時無法飛行。",
		ja: "超強力な 音波を 放ったあとは 疲れて しばらく 飛べなくなるよ。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "愛心印章",
				ja: "ハートスタンプ"
			},
			damage: 70,
			cost: [
				"Psychic",
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

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],

	retreat: 1,

	regulationMark: "D",

	abilities: [
		{
			name: {
				'zh-tw': "純樸",
				ja: "てんねん"
			},
			effect: {
				'zh-tw': "這隻寶可夢不會受到對手的寶可夢使用招式的效果的影響。",
				ja: "このポケモンは、相手のポケモンが使うワザの効果を受けない。"
			},
			type: "Ability"
		}
	],

	rarity: "Uncommon",

	dexId: [
		528
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
