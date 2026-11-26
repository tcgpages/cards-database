import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤブクロン"
	},
	illustrator: "OOYAMA",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		568
	],
	description: {
		ja: "不衛生な 場所を 好む。 ゲップのように 吐き出す ガスを 吸いこむと １週間 寝込む。"
	},
	attacks: [
		{
			name: {
				ja: "アシッドボム"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Psychic"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
