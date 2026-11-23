import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "顫弦蠑螈",
		ja: "ストリンダー"
	},

	illustrator: "Shin Nagasawa",

	category: "Pokemon",

	hp: 120,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "牠能夠製造出１５０００伏特的電流，任何對手都不放在眼裡。",
		ja: "１５０００ボルトもの 電気を 発生させることが できる。 どんな 相手も 舐めている。"
	},

	evolveFrom: {
		ja: "エレズン"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "風險愛好者",
				ja: "リスクテイカー"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則將對手的牌庫上方5張卡丟棄。若為反面，則將自己的牌庫上方5張卡丟棄。",
				ja: "コインを1回投げオモテなら、相手の山札を上から5枚トラッシュする。ウラなら、自分の山札を上から5枚トラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "電流攻擊",
				ja: "でんげき"
			},
			effect: {
				'zh-tw': "這隻寶可夢也受到30點傷害。",
				ja: "このポケモンにも30ダメージ。"
			},
			damage: 160,
			cost: [
				"Lightning",
				"Lightning",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		849
	]
}

export default card
