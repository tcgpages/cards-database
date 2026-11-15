import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蒼響",
		ja: "ザシアン"
	},

	illustrator: "Hideki Ishikawa",

	category: "Pokemon",

	hp: 120,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "用過去使用的兵器武裝自己。即使是超極巨化寶可夢，也能以一劍將之拿下。",
		ja: "かつての 得物で 武装した。 キョダイマックスポケモンも 一刀の もとに 切り捨てる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "能量湍流",
				ja: "エナジーストリーム"
			},
			effect: {
				'zh-tw': "從自己的棄牌區選擇1張【鋼】能量卡，附於這隻寶可夢身上。",
				ja: "自分のトラッシュから鋼エネルギーを1枚選び、このポケモンにつける。"
			},
			damage: 30,
			cost: [
				"Metal",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "粉碎刀鋒",
				ja: "スマッシュエッジ"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為反面，則選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
				ja: "コインを1回投げウラなら、このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			damage: 120,
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		888
	]
}

export default card
