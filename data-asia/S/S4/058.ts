import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "戰舞郎",
		ja: "カポエラー"
	},

	illustrator: "Sanosuke Sakuma",

	category: "Pokemon",

	hp: 90,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "會旋轉身體使出踢擊。當牠高速旋轉身體時，會直接鑽進地底下。",
		ja: "くるくる 回って キックをはなつ。 高速で 回っていると そのまま 地面に 潜っていく。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "循環抽出",
				ja: "サイクルドロー"
			},
			effect: {
				'zh-tw': "將自己的1張手牌丟棄。然後，從自己的牌庫抽出3張卡。",
				ja: "自分の手札を1枚トラッシュする。その後、自分の山札を3枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "龍捲風踢",
				ja: "たつまきキック"
			},
			effect: {
				'zh-tw': "在這個回合，若從手牌使出了「彩豆」，則增加80點傷害。",
				ja: "この番、手札から「サイトウ」を出して使っていたなら、80ダメージ追加。"
			},
			damage: "50+",
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		237
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
