import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "クロバット"
	},
	illustrator: "Satoshi Shirai",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ゴルバット"
	},
	stage: "Stage2",
	dexId: [
		169
	],
	description: {
		ja: "４枚に 増えた 翼で 暗闇を 静かに 飛んでいく。 となりを 通られても 気づかない。"
	},
	abilities: [
		{
			name: {
				ja: "とつぜんかみつく"
			},
			effect: {
				ja: "この特性は、このカードを手札から出して進化させたとき、1回使える。相手のポケモンを1匹選び、ダメカンを3個のせる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ちょくげきひこう"
			},
			effect: {
				ja: "相手のポケモンを1匹選び、30ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
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
