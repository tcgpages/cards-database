import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "提布莉姆",
		ja: "テブリム"
	},

	illustrator: "kirisAki",

	category: "Pokemon",

	hp: 80,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "遇到情緒激昂的對手時，無論對方是誰，都會用粗暴的方式使其沉默。",
		ja: "強い 感情を もつ ものは それが 誰であれ 黙らせる。 その手段は じつに 乱暴。"
	},

	evolveFrom: {
		ja: "ミブリム"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "冥想",
				ja: "めいそう"
			},
			effect: {
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
				ja: "このポケモンのHPを「30」回復する。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "狂舞揮打",
				ja: "ぶんまわす"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則增加30點傷害。",
				ja: "コインを1回投げオモテなら、30ダメージ追加。"
			},
			damage: "30+",
			cost: [
				"Colorless",
				"Colorless"
			]
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

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		857
	]
}

export default card
