import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "古月鳥",
		ja: "ウッウ"
	},

	illustrator: "Mitsuhiro Arita",

	category: "Pokemon",

	hp: 110,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "雖然擁有一擊定勝負的威力，但因為記性實在太差，對戰還沒結束就會忘記對手是誰。",
		ja: "相手を 一撃で 打ち負かすほど パワフルだが 忘れっぽいので 戦っている 相手を 忘れる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "潛水",
				ja: "ダイビング"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害與效果的影響。",
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			damage: 20,
			cost: [
				"Water"
			]
		},
		{
			name: {
				'zh-tw': "水炮",
				ja: "ハイドロポンプ"
			},
			effect: {
				'zh-tw': "增加這隻寶可夢身上附加的【水】能量的數量×20點傷害。",
				ja: "このポケモンについている水エネルギーの数×20ダメージ追加。"
			},
			damage: "50+",
			cost: [
				"Colorless",
				"Colorless",
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
		845
	]
}

export default card
