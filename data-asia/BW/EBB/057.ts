import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴチルゼル"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		576
	],
	hp: 130,
	types: [
		"Psychic"
	],
	stage: "Stage2",
	description: {
		ja: "強力な サイコパワーの 影響で ゴチルゼルの 周囲の 空間が ねじれ 何万光年も 遠くの 星空が 映る。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "マジックルーム"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札から「グッズ」を出して使えない。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "マッドキネシス"
			},
			effect: {
				ja: "このポケモンについている超エネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	evolveFrom: {
		ja: "ゴチミル"
	},
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
