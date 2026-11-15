import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "以歐路普",
		ja: "イオルブ"
	},

	illustrator: "Hitoshi Ariga",

	category: "Pokemon",

	hp: 130,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "以頭腦聰慧而聞名。大大的腦子是牠擁有出眾精神力量的證明。",
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "昆蟲雷達",
				ja: "バグズレーダー"
			},
			effect: {
				'zh-tw': "在自己的回合時，可使用1次。查看對手的牌庫上方3張卡，以任意順序排列，放回牌庫上方。",
				ja: "自分の番に1回使える。相手の山札を上から3枚見て、好きな順番に入れ替えて、山札の上にもどす。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "腦力波",
				ja: "ブレインウェーブ"
			},
			effect: {
				'zh-tw': "增加這隻寶可夢身上附加的【超】能量的數量×30點傷害。",
				ja: "このポケモンについている超エネルギーの数×30ダメージ追加。"
			},
			damage: "90+",
			cost: [
				"Grass",
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

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		826
	]
}

export default card
