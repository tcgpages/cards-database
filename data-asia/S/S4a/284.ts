import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "オーロンゲ"
	},
	illustrator: "Kouki Saitou",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: [
		"Darkness"
	],
	evolveFrom: {
		ja: "ギモー"
	},
	stage: "Stage2",
	dexId: [
		861
	],
	description: {
		ja: "髪の毛を 全身に 巻きつけると 筋力が アップ。 カイリキーを ねじ伏せる パワーを 発揮する。"
	},
	abilities: [
		{
			name: {
				ja: "あくのせいやく"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、ワザを使うためのエネルギーが、無エネルギー1個ぶん多くなる。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "エナジープレス"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: "100+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
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
