import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "破破袋",
		ja: "ヤブクロン"
	},

	illustrator: "HYOGONOSUKE",

	category: "Pokemon",

	hp: 60,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "喜歡不衛生的地方。如果不及時清理家裡的垃圾，破破袋就會過來居住。",
		ja: "不衛生な 場所が 好き。 ゴミで 汚したまま 放っておくと 部屋にも 現れて 棲みつく。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "毒液衝擊",
				ja: "ベノムショック"
			},
			effect: {
				'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加50點傷害。",
				ja: "相手のバトルポケモンがどくなら、50ダメージ追加。"
			},
			damage: "20+",
			cost: [
				"Colorless",
				"Colorless"
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

	regulationMark: "D",

	rarity: "None",

	dexId: [
		568
	]
}

export default card
