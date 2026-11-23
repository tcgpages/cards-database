import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "エレキブル"
	},
	rarity: "Uncommon",
	illustrator: "tetsuya koizumi",
	category: "Pokemon",
	hp: 140,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		466
	],
	description: {
		ja: "エレキブル １匹で 大都市の 建物 すべての 電力を １年分 まかなうことが できる。"
	},
	attacks: [
		{
			name: {
				ja: "でんきショック"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "パワードボルト"
			},
			effect: {
				ja: "このポケモンに特殊エネルギーがついているなら、90ダメージ追加。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: "90+"
		}
	],
	evolveFrom: {
		ja: "エレブー"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 3,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
