import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "キルリア"
	},
	illustrator: "Yukiko Baba",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		281
	],
	hp: 80,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	description: {
		ja: "トレーナーが 喜ぶと キルリアに エネルギーが 満ちあふれ 楽しそうに くるくると 踊る。"
	},
	attacks: [
		{
			name: {
				ja: "サイコトリップ"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "かいてんアタック"
			},
			cost: [
				"Psychic",
				"Colorless",
				"Colorless"
			],
			damage: 40
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	evolveFrom: {
		ja: "ラルトス"
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
