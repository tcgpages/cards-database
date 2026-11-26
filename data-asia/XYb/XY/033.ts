import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ライコウ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		243
	],
	description: {
		ja: "体内で 渦巻く 力を 電撃として 出しながら 大地を 駆け巡る 荒々しい ポケモン。"
	},
	abilities: [
		{
			name: {
				ja: "ひかるからだ"
			},
			effect: {
				ja: "このポケモンに雷エネルギーがついているなら、このポケモンが受けるワザのダメージは「-20」される。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "サンダーランス"
			},
			effect: {
				ja: "このポケモンについている雷エネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "50+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
