import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ギモー"
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 90,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		860
	],
	description: {
		ja: "土下座して 謝る 振りをして 槍のように 尖った 後ろ髪で 突き刺してくる 戦法を 使う。"
	},
	attacks: [
		{
			name: {
				ja: "かみつく"
			},
			cost: [
				"Darkness"
			],
			damage: 30
		},
		{
			name: {
				ja: "どげざつき"
			},
			effect: {
				ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
