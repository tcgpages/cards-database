import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "メロエッタ"
	},
	illustrator: "Mizue",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		648
	],
	hp: 90,
	types: [
		"Fighting"
	],
	stage: "Basic",
	description: {
		ja: "メロエッタの 奏でる 旋律は 周りの ポケモンを 喜ばせたり 悲しませるほどの パワーがある。"
	},
	attacks: [
		{
			name: {
				ja: "マジカルダンス"
			},
			effect: {
				ja: "自分のベンチポケモン全員のHPを、それぞれ「30」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "りゅうせいステップ"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、オモテの数×30ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
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
