import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "重泥挽馬",
		ja: "バンバドロ"
	},

	illustrator: "tetsuya koizumi",

	category: "Pokemon",

	hp: 140,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "泥巴使牠的蹄變得比岩石還要堅硬，只要一擊就能產生足以破壞卡車的威力。",
		ja: "泥で 固めた 脚は 岩よりも 硬くなり 一撃で トラックを 破壊する 威力を 生み出す。"
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "泥巴炸彈",
				ja: "どろばくだん"
			},
			damage: 50,
			cost: [
				"Fighting",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "重磅衝撞",
				ja: "ヘビーボンバー"
			},
			effect: {
				'zh-tw': "減少對手的戰鬥寶可夢【撤退】所需的能量的數量×30點傷害。",
				ja: "相手のバトルポケモンのにげるためのエネルギーの数×30ダメージぶん、このワザのダメージは小さくなる。"
			},
			damage: "180-",
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Uncommon",

	dexId: [
		750
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
