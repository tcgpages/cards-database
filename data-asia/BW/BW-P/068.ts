import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "バルチャイ"
	},
	rarity: "Promo",
	illustrator: "sui",
	category: "Pokemon",
	hp: 50,
	types: [
		"Darkness"
	],
	stage: "Basic",
	dexId: [
		629
	],
	description: {
		ja: "手ごろな ガイコツを 見つけて おしりを 防御する 習性。 弱い ポケモンを 追いかけ回す。"
	},
	attacks: [
		{
			name: {
				ja: "おしりガード"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			cost: [
				"Darkness"
			]
		},
		{
			name: {
				ja: "かぜおこし"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 20
		}
	],
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
