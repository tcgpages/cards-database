import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "龍頭地鼠",
		ja: "ドリュウズ"
	},

	illustrator: "Anesaki Dynamic",

	category: "Pokemon",

	hp: 130,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "有許多看似自然形成的洞窟其實都是龍頭地鼠一陣亂鑽之後留下來的。",
		ja: "自然の 洞窟に 見えても ドリュウズが 掘り荒らした 跡と いうことも よくある 話だ。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "直衝鑽",
				ja: "ドリルライナー"
			},
			effect: {
				'zh-tw': "選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
				ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			damage: 30,
			cost: [
				"Metal",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "利爪揮砍",
				ja: "スラッシュクロー"
			},
			damage: 130,
			cost: [
				"Metal",
				"Metal",
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

	retreat: 3,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		530
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
