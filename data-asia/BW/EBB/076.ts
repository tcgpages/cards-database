import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "チルタリス"
	},
	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		334
	],
	hp: 80,
	types: [
		"Dragon"
	],
	stage: "Stage1",
	description: {
		ja: "晴れた日 綿雲に まぎれながら 大空を 自由に 飛びまわり 美しい ソプラノで 歌う。"
	},
	attacks: [
		{
			name: {
				ja: "スピードひこう"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "たちきる"
			},
			effect: {
				ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンについているエネルギーをすべてトラッシュする。"
			},
			cost: [
				"Water",
				"Metal",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "チルタリスGX"
	},
	variants: [
		{
			type: "normal",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "normal"
		},
		{
			type: "reverse",
			stamp: [
				"1st-edition"
			]
		},
		{
			type: "reverse"
		}
	]
}

export default card
