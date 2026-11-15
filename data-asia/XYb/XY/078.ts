import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "イベルタル"
	},
	illustrator: "Hajime Kusajima",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		717
	],
	description: {
		ja: "寿命が つきるとき あらゆる 生き物の 命を 吸いつくし 繭の 姿に 戻るという。"
	},
	attacks: [
		{
			name: {
				ja: "デスウイング"
			},
			effect: {
				ja: "自分のトラッシュから悪エネルギーを1枚選び、ベンチポケモンにつける。"
			},
			cost: [
				"Darkness"
			],
			damage: 30
		},
		{
			name: {
				ja: "やみのやいば"
			},
			effect: {
				ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザを使えない。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 100
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
			value: "-20"
		}
	],
	retreat: 2,
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
