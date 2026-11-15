import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "泡沫栗鼠",
		ja: "チラーミィ"
	},

	illustrator: "Sekio",

	category: "Pokemon",

	hp: 70,

	types: [
		"Colorless"
	],

	description: {
		'zh-tw': "用尾巴來清掃灰塵。雖說能幫忙打掃是件好事，但牠的潔癖也會讓人感到棘手。",
		ja: "しっぽで 汚れを 払い落す。 掃除を するときに 助かるが 潔癖症 なので 大変。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "偷看",
				ja: "ちらみ"
			},
			effect: {
				'zh-tw': "查看對手的牌庫上方1張卡，回復原樣。",
				ja: "相手の山札を上から1枚見て、もとにもどす。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "掃尾拍打",
				ja: "スイープビンタ"
			},
			effect: {
				'zh-tw': "擲2次硬幣，造成正面出現的次數×20點傷害。",
				ja: "コインを2回投げ、オモテの数×20ダメージ。"
			},
			damage: "20×",
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		572
	]
}

export default card
