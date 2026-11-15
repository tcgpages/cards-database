import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "モクロー"
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		722
	],
	description: {
		ja: "飛行しながら 切れ味 鋭い 羽根を 飛ばし 近距離では 強烈な キックを 叩きこむ。"
	},
	abilities: [
		{
			name: {
				ja: "スカイサーカス"
			},
			effect: {
				ja: "この番、自分の手札から「とりつかい」を出して使っていたなら、このポケモンがワザを使うためのエネルギーは、すべてなくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "かぜのつぶて"
			},
			effect: {
				ja: "相手のベンチポケモン1匹に、60ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
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
