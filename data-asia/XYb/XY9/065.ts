import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ラッタ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],
	evolveFrom: {
		ja: "コラッタ"
	},
	stage: "Stage1",
	dexId: [
		20
	],
	description: {
		ja: "後ろ足に ついた 水かきを 使って 川を 渡り 広い 範囲で エサを 探し回る。"
	},
	abilities: [
		{
			name: {
				ja: "こうたい"
			},
			effect: {
				ja: "このポケモンは特殊状態にならない。（受けている特殊状態は、すべて回復する。）"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ダーティショック"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
