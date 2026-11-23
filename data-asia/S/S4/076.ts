import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵頭目",
		ja: "ガラル ニャイキング"
	},

	illustrator: "Shin Nagasawa",

	category: "Pokemon",

	hp: 120,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "有著十分好戰的性格。頭上像鐵頭盔一樣的東西其實是牠硬化後的體毛。",
		ja: "頭の 体毛が 硬質化して 鉄の ヘルメットのように なった。 とても 好戦的な 性質。"
	},

	evolveFrom: {
		ja: "ガラル ニャース"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "掠奪爪",
				ja: "ふんだクロー"
			},
			effect: {
				'zh-tw': "擲3次硬幣。若出現正面，則查看對手的手牌，選擇其中與正面出現的次數相同數量的訓練家卡，將其丟棄。",
				ja: "コインを3回投げる。オモテが出たなら、相手の手札を見て、その中からトレーナーズをオモテの数ぶん選び、トラッシュする。"
			},
			damage: 20,
			cost: [
				"Metal"
			]
		},
		{
			name: {
				'zh-tw': "利爪劈擊",
				ja: "ツメできりさく"
			},
			damage: 90,
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		863
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
