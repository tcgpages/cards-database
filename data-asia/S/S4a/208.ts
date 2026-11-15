import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "イオルブ"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Grass"
	],
	stage: "Stage2",
	dexId: [
		826
	],
	description: {
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。"
	},
	abilities: [
		{
			name: {
				ja: "バグズレーダー"
			},
			effect: {
				ja: "自分の番に1回使える。相手の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ブレインウェーブ"
			},
			effect: {
				ja: "このポケモンについている超エネルギーの数×30ダメージ追加。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: "90+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
