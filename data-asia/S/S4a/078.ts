import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "迷布莉姆",
		ja: "ミブリム"
	},

	illustrator: "Mina Nakai",

	category: "Pokemon",

	hp: 60,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "透過頭部的突起物來感應生物的情感。只對溫和的人敞開心扉。",
		ja: "頭の 突起で 生物の 気持ちを 感じとる。 穏やかな ものにしか 心を 開かない。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "尋找朋友",
				ja: "ともだちをさがす"
			},
			effect: {
				'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
				ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "精神射擊",
				ja: "サイコショット"
			},
			damage: 20,
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
		856
	]
}

export default card
