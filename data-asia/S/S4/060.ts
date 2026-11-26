import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代拉基翁",
		ja: "テラキオン"
	},

	illustrator: "NC Empire",

	category: "Pokemon",

	hp: 140,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "擁有異常強大的力量。會把欺負弱小寶可夢的對手打到再也站不起來。",
		ja: "けた外れの パワーの 持ち主。 小さな ポケモンを いじめる 相手は とことん 叩きのめす。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "防守壓制",
				ja: "ガードプレス"
			},
			effect: {
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。",
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。"
			},
			damage: 30,
			cost: [
				"Fighting",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "大地能量",
				ja: "グラウンドパワー"
			},
			effect: {
				'zh-tw': "若場上有自己的競技場卡，則增加80點傷害。",
				ja: "場に自分のスタジアムが出ているなら、80ダメージ追加。"
			},
			damage: "80+",
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 4,

	regulationMark: "D",

	rarity: "Rare",

	dexId: [
		639
	],

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
