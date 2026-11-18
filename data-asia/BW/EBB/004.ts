import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "ジャローダ"
	},
	illustrator: "hatachu",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		497
	],
	hp: 130,
	types: [
		"Grass"
	],
	stage: "Stage2",
	description: {
		ja: "頭を 高く 持ち上げて 相手を 威圧する。 強敵と 戦う ときだけ 本気を 出す。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ロイヤルヒール"
			},
			effect: {
				ja: "このポケモンがいるかぎり、ポケモンチェックのたび、自分のポケモン全員のHPを、それぞれ「10」回復する。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "グラスミキサー"
			},
			effect: {
				ja: "自分のポケモンについている草エネルギーを好きなだけ選び、自分のポケモンに好きなようにつけ替える。"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Water",
			value: "－20"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ジャローダex"
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
