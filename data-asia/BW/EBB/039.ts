import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "プラスル"
	},
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		311
	],
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "火花の ボンボンを 作って 仲間を 応援する。 電柱から 電気を 吸い取る。"
	},
	attacks: [
		{
			name: {
				ja: "タッグドロー"
			},
			effect: {
				ja: "自分の手札をすべて山札にもどし、山札を切る。その後、山札を4枚引く。自分のベンチに「マイナン」がいるなら、さらに4枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "プラスイオン"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Lightning"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
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
