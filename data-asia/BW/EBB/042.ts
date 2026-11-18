import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ボルトロス"
	},
	illustrator: "Yukiko Baba",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		642
	],
	hp: 110,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "しっぽの トゲから 電撃を 撃ち出す。 イッシュ地方の 空を 飛び回り 雷を 落とす。"
	},
	attacks: [
		{
			name: {
				ja: "じゅうでん"
			},
			effect: {
				ja: "自分の山札から雷エネルギーを1枚選び、このポケモンにつける。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ディザスターボルト"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
