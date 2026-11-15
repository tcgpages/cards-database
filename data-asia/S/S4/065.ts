import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 蔥遊兵V",
		ja: "ガラル ネギガナイトV"
	},

	illustrator: "PLANETA Tsuji",

	category: "Pokemon",

	hp: 210,

	types: [
		"Fighting"
	],

	stage: "Basic",

	suffix: "V",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "誓約之槍",
				ja: "ちかいのやり"
			},
			effect: {
				'zh-tw': "在自己的回合，當從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇自己的場上寶可夢身上附加的任意數量的【鬥】能量，改附於這隻寶可夢身上。",
				ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについている闘エネルギーを好きなだけ選び、このポケモンにつけ替える。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "墜落星星",
				ja: "フォールスター"
			},
			effect: {
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			damage: 200,
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "Holo Rare V",

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
