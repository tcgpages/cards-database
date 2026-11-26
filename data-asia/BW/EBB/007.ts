import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ハハコモリ"
	},
	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		542
	],
	hp: 130,
	types: [
		"Grass"
	],
	stage: "Stage2",
	description: {
		ja: "小さい ポケモンを 見つけると 腕の カッターと 粘着糸で 葉っぱの 服を 縫う 習性。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "リーフテーラー"
			},
			effect: {
				ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員の弱点は、すべてなくなる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "アームカッター"
			},
			effect: {
				ja: "コインを2回投げ、オモテの数×20ダメージを追加。"
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 2,
	evolveFrom: {
		ja: "クルマユ"
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
