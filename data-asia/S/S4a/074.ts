import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "象徵鳥",
		ja: "シンボラー"
	},

	illustrator: "Naoyo Kimura",

	category: "Pokemon",

	hp: 110,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "利用精神力量在空中飛翔，被稱為古代都市的守護神。也有人認為牠是守護神的使者。",
		ja: "サイコパワーで 空を 飛ぶ。 古代都市の 守り神 とも その遣いとも いわれている。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "反擊",
				ja: "はんげき"
			},
			effect: {
				'zh-tw': "這隻寶可夢在戰鬥場受到對手的寶可夢招式的傷害時，在使用招式的寶可夢身上放置3個傷害指示物。",
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを3個のせる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "精神傷害",
				ja: "サイコダメージ"
			},
			effect: {
				'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。"
			},
			damage: "30+",
			cost: [
				"Psychic",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Lightning",
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
		561
	]
}

export default card
