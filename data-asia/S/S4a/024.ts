import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "閃焰王牌",
		ja: "エースバーン"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 170,

	types: [
		"Fire"
	],

	description: {
		'zh-tw': "會將小石頭像足球般用腳挑起，製造出纏繞著火焰的足球。會用猛烈的踢射來燃燒對手。",
		ja: "攻守に 優れ 応援されると さらに 燃えるが スタンドプレイに 走り ピンチを 招くこともある。"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "自由者",
				ja: "リベロ"
			},
			effect: {
				'zh-tw': "在自己的回合，當從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。從自己的棄牌區選擇最多2張【火】能量卡，附於這隻寶可夢身上。",
				ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分のトラッシュから炎エネルギーを2枚まで選び、このポケモンにつける。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "閃焰前鋒",
				ja: "フレアストライカー"
			},
			effect: {
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			damage: 190,
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		815
	]
}

export default card
