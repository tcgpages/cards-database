import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 哭哭面具",
		ja: "ガラル デスマス"
	},

	illustrator: "Akira Komayama",

	category: "Pokemon",

	hp: 70,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "刻有詛咒的黏土板附在了哭哭面具上。據說會吸收怨念的能量。",
		ja: "呪いが 刻まれた 粘土板が デスマスに 憑りついた。 怨念 パワーを 吸いとっていると いう。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "突擊",
				ja: "とつげき"
			},
			effect: {
				'zh-tw': "這隻寶可夢也受到30點傷害。",
				ja: "このポケモンにも30ダメージ。"
			},
			damage: 50,
			cost: [
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

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		562
	]
}

export default card
