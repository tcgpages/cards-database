import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "コリンク"
	},
	rarity: "Common",
	illustrator: "Uta",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		403
	],
	description: {
		ja: "危険を 感じると 全身の 体毛が 光る。 相手が 目を くらませている あいだに 逃げる。"
	},
	attacks: [
		{
			name: {
				ja: "ぎゃっきょう"
			},
			effect: {
				ja: "相手のサイドの残り枚数が3枚以下なら、50ダメージ追加。"
			},
			cost: [
				"Lightning"
			],
			damage: "10+"
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
