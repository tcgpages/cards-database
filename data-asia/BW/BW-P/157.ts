import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "フライゴン"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "BERUBURI",
	category: "Pokemon",
	hp: 140,
	types: [
		"Dragon"
	],
	stage: "Stage2",
	dexId: [
		330
	],
	description: {
		ja: "砂漠の精霊 と 呼ばれる。 はばたくことで 巻き起こした 砂あらしの 中に 隠れている。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "すなのかんごく"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、ポケモンチェックのたび、相手のポケモン全員に、ダメカンをそれぞれ1個ずつのせる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "フライングビート"
			},
			effect: {
				ja: "のぞむなら、このポケモンについている[草]エネルギーと[闘]エネルギーを、それぞれ1個ずつ選び、トラッシュしてよい。その場合、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Grass",
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	evolveFrom: {
		ja: "ビブラーバ"
	},
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
