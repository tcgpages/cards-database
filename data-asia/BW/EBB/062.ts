import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "メロエッタ"
	},
	illustrator: "kawayoo",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		648
	],
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Basic",
	description: {
		ja: "メロエッタの 奏でる 旋律は 周りの ポケモンを 喜ばせたり 悲しませるほどの パワーがある。"
	},
	attacks: [
		{
			name: {
				ja: "サイコキネシス"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Psychic"
			],
			damage: "10+"
		},
		{
			name: {
				ja: "エコーボイス"
			},
			effect: {
				ja: "次の自分の番、このポケモンが使う「エコーボイス」のダメージは「+50」される。"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 50
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
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
