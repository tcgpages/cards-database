import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "スワンナ"
	},
	rarity: "Promo",
	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		581
	],
	description: {
		ja: "クチバシの 攻撃は 強烈。 長い 首を しならせて 連続して 突きを 繰り出す。"
	},
	attacks: [
		{
			name: {
				ja: "つばさのまい"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "エアスラッシュ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "コアルヒー"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
