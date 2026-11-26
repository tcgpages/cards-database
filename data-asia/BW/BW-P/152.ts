import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュウ"
	},
	rarity: "Promo",
	illustrator: "Mizue",
	category: "Pokemon",
	hp: 100,
	types: [
		"Lightning"
	],
	stage: "Stage1",
	dexId: [
		26
	],
	description: {
		ja: "しっぽが アースの 役目をはたして 電気を 地面に 逃がすので 自分自身は しびれたりしない。"
	},
	attacks: [
		{
			name: {
				ja: "でんこうせっか"
			},
			effect: {
				ja: "コインを1回投げオモテなら、20ダメージを追加。"
			},
			cost: [
				"Lightning",
				"Colorless"
			],
			damage: "30+"
		},
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
			damage: 90
		}
	],
	evolveFrom: {
		ja: "ピカチュウ"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
