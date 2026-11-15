import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "脫殼忍者",
		ja: "ヌケニン"
	},

	illustrator: "Tomokazu Komiya",

	category: "Pokemon",

	hp: 30,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "牠是一種在土居忍士進化時，會神不知鬼不覺地出現在精靈球裡的神奇寶可夢。",
		ja: "ツチニンが 進化する ときに いつの間にか モンスターボールに 入っている 不思議な ポケモンだ。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "脫殼定身法",
				ja: "ぬけしばり"
			},
			effect: {
				'zh-tw': "這張卡只可依據鐵面忍者的特性「脫殼」的效果放置於場上。（這張卡在對戰準備時也不可放置於場上）",
				ja: "このカードは、テッカニンの特性「からぬけ」の効果によってしか場に出せない。（このカードは、対戦準備でも場に出せない。）"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "生命榨取",
				ja: "いのちをしぼる"
			},
			effect: {
				'zh-tw': "在對手的戰鬥寶可夢身上放置傷害指示物直到剩餘HP變為「10」為止。",
				ja: "相手のバトルポケモンの残りHPが「10」になるように、ダメカンをのせる。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			]
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		292
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
