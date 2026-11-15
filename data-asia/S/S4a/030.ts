import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 踏冰人偶",
		ja: "ガラル バリコオル"
	},

	illustrator: "Naoki Saito",

	category: "Pokemon",

	hp: 120,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "踢踏舞的達人。會揮動手中的冰杖，向觀眾表演輕快的舞步。",
		ja: "タップダンスの 達人。 氷で できた ステッキを 振り 軽やかな ステップを 披露する。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "曳步舞",
				ja: "シャッフルダンス"
			},
			effect: {
				'zh-tw': "在自己的回合時，可使用1次。選擇1張對手的反面向上的獎賞卡，與對手的牌庫最上方的卡維持反面朝上互換。",
				ja: "自分の番に1回使える。ウラになっている相手のサイドを1枚選び、相手の山札の一番上のカードと、ウラのまま入れ替える。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "瘋狂派對",
				ja: "マッドパーティ"
			},
			effect: {
				'zh-tw': "造成自己的棄牌區的，持有「瘋狂派對」招式的寶可夢的數量×20點傷害。",
				ja: "自分のトラッシュにある、ワザ「マッドパーティ」を持つポケモンの数×20ダメージ。"
			},
			damage: "20×",
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		866
	]
}

export default card
