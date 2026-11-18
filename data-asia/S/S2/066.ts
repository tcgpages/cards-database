import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン"
	},
	rarity: "Common",
	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		568
	],
	description: {
		ja: "不衛生な 場所が 好き。 ゴミで 汚したまま 放っておくと 部屋にも 現れて 棲みつく。"
	},
	attacks: [
		{
			name: {
				ja: "ベノムショック"
			},
			effect: {
				ja: "相手のバトルポケモンがどくなら、50ダメージ追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
