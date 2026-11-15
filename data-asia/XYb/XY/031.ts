import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "サンダース"
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		135
	],
	description: {
		ja: "空気中の マイナスイオンを 吸いこんで 約１００００ボルトの 電気を 吐き出すことがある。"
	},
	abilities: [
		{
			name: {
				ja: "エレキエフェクト"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の1進化ポケモン全員は、もとのタイプに加え雷タイプも持つ。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "サンダーブラスト"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
