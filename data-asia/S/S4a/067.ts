import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 小火馬",
		ja: "ガラル ポニータ"
	},

	illustrator: "Saya Tsuruta",

	category: "Pokemon",

	hp: 70,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "小小的角裡蘊藏著治癒之力。如果只是一點小傷，牠只要用角輕擦傷口就能治癒。",
		ja: "瞳を 覗いて 心を 読む。 よこしまな 気持ちを 見つけると たちまち 姿を 消してしまう。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "念力",
				ja: "ねんりき"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			damage: 10,
			cost: [
				"Psychic"
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

	dexId: [
		77
	]
}

export default card
