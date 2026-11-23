import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風妖精",
		ja: "エルフーン"
	},

	illustrator: "Naoyo Kimura",

	category: "Pokemon",

	hp: 90,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "喜歡到處撒棉花搗蛋。沾水之後就會變重而動彈不得，只能聽天由命。",
		ja: "綿を まき散らし イタズラする。 水を かけると 重くなって 動けなくなり 観念するぞ。"
	},

	evolveFrom: {
		ja: "モンメン"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "三重抽出",
				ja: "トリプルドロー"
			},
			effect: {
				'zh-tw': "從自己的牌庫抽出3張卡。",
				ja: "自分の山札を3枚引く。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "快飛衝刺",
				ja: "とんでけラッシュ"
			},
			effect: {
				'zh-tw': "在造成傷害前，將自己的場上寶可夢身上附加的任意數量的「寶可夢道具」丟棄，增加其張數×40點傷害。",
				ja: "ダメージを与える前に、自分の場のポケモンについている「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×40ダメージ追加。"
			},
			damage: "10+",
			cost: [
				"Psychic"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],

	retreat: 0,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		547
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
