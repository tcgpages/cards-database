import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "パルスワン"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Lightning"
	],
	evolveFrom: {
		ja: "ワンパチ"
	},
	stage: "Stage1",
	dexId: [
		836
	],
	description: {
		ja: "電気を つくって 脚に 送り 走りを アシスト。 三日三晩 休まず 走れるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "かじりつく"
			},
			effect: {
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 50
		},
		{
			name: {
				ja: "とうしのキバ"
			},
			effect: {
				ja: "相手のバトルポケモンが「ポケモンV・GX」なら、90ダメージ追加。"
			},
			cost: [
				"Lightning",
				"Colorless",
				"Colorless"
			],
			damage: "90+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
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
