import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "バオッキー"
	},
	rarity: "Promo",
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 90,
	types: [
		"Fire"
	],
	stage: "Stage1",
	dexId: [
		514
	],
	description: {
		ja: "体の 中の 炎を 燃やして 頭や しっぽから 火の粉を まき散らせて 敵を 焦がす。"
	},
	attacks: [
		{
			name: {
				ja: "みずのちから"
			},
			effect: {
				ja: "このポケモンに[水]エネルギーがついているなら、相手のバトルポケモンをねむりにする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "かえんほうしゃ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "バオップ"
	},
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
