import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "イエッサン"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: [
		"Psychic"
	],
	stage: "Basic",
	dexId: [
		876
	],
	description: {
		ja: "高い 知能を もつ ポケモン。 仲間同士で ツノを 寄せあい 情報 交換を する。"
	},
	attacks: [
		{
			name: {
				ja: "リフレッシュタイム"
			},
			effect: {
				ja: "自分のポケモン全員のHPを、それぞれ「30」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "サイケこうせん"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
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
