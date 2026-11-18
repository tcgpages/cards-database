import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "無極汰那VMAX",
		ja: "ムゲンダイナVMAX"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 340,

	types: [
		"Darkness"
	],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "無極領域",
				ja: "ムゲンゾーン"
			},
			effect: {
				'zh-tw': "若自己的所有場上寶可夢皆為【惡】屬性則生效。可放置於自己的備戰區的【惡】寶可夢數量改為8隻，其他屬性無法放置於場上。（當這個特性不生效後，將備戰區的寶可夢丟棄直到變為5隻為止。）",
				ja: "自分の場のポケモン全員が悪タイプならはたらく。自分のベンチに出せる悪ポケモンの数は8匹になり、別のタイプは場に出せない。（この特性がはたらかなくなったとき、ベンチが5匹になるまでトラッシュする。）"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "忌憚之末",
				ja: "ドレッドエンド"
			},
			effect: {
				'zh-tw': "造成自己的場上【惡】寶可夢的數量×30點傷害。",
				ja: "自分の場の悪ポケモンの数×30ダメージ。"
			},
			damage: "30×",
			cost: [
				"Darkness",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "Holo Rare VMAX",

	suffix: "VMAX",

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
