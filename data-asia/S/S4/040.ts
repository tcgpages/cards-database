import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "麻麻鰻魚王",
		ja: "シビルドン"
	},

	illustrator: "tetsuya koizumi",

	category: "Pokemon",

	hp: 160,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "用手臂的力量從大海裡爬出，襲擊水邊的獵物。會瞬間將獵物拖入海中。",
		ja: "腕の 力で 海から はい出し 水辺の 獲物に 襲いかかる。 一瞬で 海へ 引きずりこむ。"
	},

	evolveFrom: {
		ja: "シビビール"
	},
	stage: "Stage2",

	attacks: [
		{
			name: {
				'zh-tw': "麻痺齒型",
				ja: "しびれるはがた"
			},
			effect: {
				'zh-tw': "在下個對手的回合，若對手從手牌將能量卡附於受到這個招式的寶可夢身上，則在那隻寶可夢身上放置6個傷害指示物。",
				ja: "次の相手の番、このワザを受けたポケモンに、相手が手札からエネルギーをつけたなら、そのポケモンにダメカンを6個のせる。"
			},
			damage: 60,
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				'zh-tw': "電擊灑水器",
				ja: "エレキスプリンクラー"
			},
			effect: {
				'zh-tw': "自己的1隻備戰寶可夢也受到30點傷害。對手的1隻備戰寶可夢也受到30點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "自分のベンチポケモン1匹にも、30ダメージ。相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			damage: 120,
			cost: [
				"Lightning",
				"Colorless",
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

	rarity: "Uncommon",

	dexId: [
		604
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
