import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼルネアス"
	},
	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fairy"
	],
	stage: "Basic",
	dexId: [
		716
	],
	description: {
		ja: "頭の ツノが 七色に 輝くとき 永遠の 命を 分け与えると 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "ジオコントロール"
			},
			effect: {
				ja: "自分のベンチポケモンを2匹選び、山札から妖エネルギーを、選んだポケモンにそれぞれ1枚ずつつける。そして山札を切る。"
			},
			cost: [
				"Fairy"
			]
		},
		{
			name: {
				ja: "にじのやり"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fairy",
				"Fairy",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Darkness",
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
