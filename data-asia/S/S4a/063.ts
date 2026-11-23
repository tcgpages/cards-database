import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷鳥龍",
		ja: "パッチラゴン"
	},

	illustrator: "Misa Tsutsui",

	category: "Pokemon",

	hp: 160,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "在遠古時代曾憑藉自己強大的下半身而所向無敵，但因吃光了賴以為生的植物而滅絕了。",
		ja: "古代では たくましい 下半身で 無敵だったが 餌の 植物を 食べつくしてしまい 絶滅した。"
	},

	evolveFrom: {
		ja: "めずらしい化石"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "衝天電流",
				ja: "アッパーでんりゅう"
			},
			effect: {
				'zh-tw': "在下個自己的回合，這隻寶可夢「衝天電流」的傷害「+90」點。",
				ja: "次の自分の番、このポケモンの「アッパーでんりゅう」のダメージは「+90」される。"
			},
			damage: 30,
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				'zh-tw': "終極衝擊",
				ja: "ギガインパクト"
			},
			effect: {
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			damage: 200,
			cost: [
				"Colorless",
				"Colorless",
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

	retreat: 4,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		880
	]
}

export default card
