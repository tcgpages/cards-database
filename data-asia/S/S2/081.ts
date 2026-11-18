import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ケンホロウ"
	},
	rarity: "Uncommon",
	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 150,
	types: [
		"Colorless"
	],
	stage: "Stage2",
	dexId: [
		521
	],
	description: {
		ja: "高い 飛行能力を もち メスは 持久力に 優れる。 飛行スピードは オスが 勝る。"
	},
	attacks: [
		{
			name: {
				ja: "ひるませる"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-50」される。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "エアスラッシュ"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: 150
		}
	],
	evolveFrom: {
		ja: "ハトーボー"
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
			value: "－30"
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
