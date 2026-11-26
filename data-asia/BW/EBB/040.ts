import { Card } from "../../../interfaces"
import Set from "../EBB"

const card: Card = {
	set: Set,
	name: {
		ja: "マイナン"
	},
	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [
		312
	],
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	description: {
		ja: "仲間を 応援する 習性。 負けそうになると 体から 出す 火花の 数が どんどん 増える。"
	},
	attacks: [
		{
			name: {
				ja: "マイナスイオン"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンが使うワザのダメージは「-30」される。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "エレキシャワー"
			},
			effect: {
				ja: "相手のポケモン全員に、それぞれ10ダメージ。［ベンチへのダメージは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Lightning"
			]
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
