import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "サザンドラEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: [
		"Dragon"
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "ドラゴンロード"
			},
			effect: {
				ja: "この特性は、場にスタジアムが出ているなら、はたらく。このポケモンがいるかぎり、自分の竜ポケモン全員のにげるために必要なエネルギーは、それぞれ2個ぶん少なくなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ひきさく"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			cost: [
				"Psychic",
				"Darkness",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
