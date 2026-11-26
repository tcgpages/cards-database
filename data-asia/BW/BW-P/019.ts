import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ポカブ"
	},
	rarity: "Promo",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fire"
	],
	stage: "Basic",
	dexId: [
		498
	],
	description: {
		ja: "敵の 攻撃を 身軽に 避けて 鼻から 火の玉を 撃ち出す。 炎で 木の実を 焼いて 食べる。"
	},
	attacks: [
		{
			name: {
				ja: "こがす"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "ひをふく"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
