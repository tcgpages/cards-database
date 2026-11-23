import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルバット"
	},
	illustrator: "Kanako Eo",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ズバット"
	},
	stage: "Stage1",
	dexId: [
		42
	],
	description: {
		ja: "かみついたら 最後。死ぬほど 血を 吸いまくるので 重たくなって 自分で 飛べなくなることもある。"
	},
	abilities: [
		{
			name: {
				ja: "こっそりかみつく"
			},
			effect: {
				ja: "この特性は、このカードを手札から出して進化させたとき、1回使える。相手のポケモンを1匹選び、ダメカンを2個のせる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "おうだんひこう"
			},
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
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
			value: "-20"
		}
	],
	retreat: 0,
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
