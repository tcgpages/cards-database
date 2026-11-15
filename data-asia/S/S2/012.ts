import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "アップリュー"
	},
	rarity: "Rare",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 80,
	types: [
		"Grass"
	],
	stage: "Stage1",
	dexId: [
		841
	],
	description: {
		ja: "すっぱい りんごを 食べて 進化。 火傷する ほど 強酸性の 液体を 頬袋に 溜める。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "アップルドロップ"
			},
			effect: {
				ja: "自分の番に1回使える。相手のポケモン1匹に、ダメカンを2個のせる。その後、このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "アシッドボム"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "カミッチュ"
	},
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
