import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "莫魯貝可",
		ja: "モルペコ"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 80,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "總是餓著肚子。會吃掉裝在像口袋一樣的袋子裡的種子來發電。",
		ja: "いつも お腹を すかせている。 ポケットの ような 袋に 入れた タネを 食べて 電気を つくる。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "無理取鬧",
				ja: "いちゃもん"
			},
			effect: {
				'zh-tw': "選擇對手的戰鬥寶可夢持有的1個招式。在下個對手的回合，受到這個招式的寶可夢無法使用被選擇的招式。",
				ja: "相手のバトルポケモンが持っているワザを1つ選ぶ。次の相手の番、このワザを受けたポケモンは、選ばれたワザが使えない。"
			},
			damage: 20,
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "電光",
				ja: "スパーク"
			},
			effect: {
				'zh-tw': "對手的1隻備戰寶可夢也受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "相手のベンチポケモン1匹にも、20ダメージ。[ベンチは弱点・抵抗力を計算しない。]"
			},
			damage: 50,
			cost: [
				"Lightning",
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
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		877
	]
}

export default card
