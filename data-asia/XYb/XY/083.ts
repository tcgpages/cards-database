import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクンBREAK"
	},
	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Metal"
	],
	stage: "BREAK",
	suffix: "BREAK",
	attacks: [
		{
			name: {
				ja: "ゴールドレイン"
			},
			effect: {
				ja: "このポケモンについている鋼エネルギーを好きなだけトラッシュし、トラッシュした数ぶん、相手のポケモンを選ぶ（同じポケモンを2回以上選んでもよい）。その後、選んだポケモン全員に、弱点・抵抗力の計算をせず、選んだ回数×30ダメージ。"
			},
			cost: [
				"Metal",
				"Colorless"
			]
		}
	],
	retreat: 0,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
