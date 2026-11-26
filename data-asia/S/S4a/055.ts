import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "逐電犬",
		ja: "パルスワン"
	},

	illustrator: "Misa Tsutsui",

	category: "Pokemon",

	hp: 130,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "會製造電能，並傳送到腳上作為奔跑時的輔助動力。能不眠不休地奔跑三天三夜。",
		ja: "電気を つくって 脚に 送り 走りを アシスト。 三日三晩 休まず 走れるのだ。"
	},

	evolveFrom: {
		ja: "ワンパチ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "咬緊",
				ja: "かじりつく"
			},
			effect: {
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			damage: 50,
			cost: [
				"Colorless",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "鬥志之牙",
				ja: "とうしのキバ"
			},
			effect: {
				'zh-tw': "若對手的戰鬥寶可夢為「寶可夢【V】・【GX】」，則增加90點傷害。",
				ja: "相手のバトルポケモンが「ポケモンV・GX」なら、90ダメージ追加。"
			},
			damage: "90+",
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

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		836
	]
}

export default card
