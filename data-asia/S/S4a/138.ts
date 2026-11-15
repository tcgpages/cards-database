import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特",
		ja: "ザマゼンタ"
	},

	illustrator: "Hideki Ishikawa",

	category: "Pokemon",

	hp: 120,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "能夠反彈一切的攻擊，因此被稱為格鬥王之盾，受到人們的畏懼與尊崇。",
		ja: "いかなる 攻撃も 弾き返す 姿は 格闘王の盾 と 呼ばれ 恐れ 崇められた。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "防守壓制",
				ja: "ガードプレス"
			},
			effect: {
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-20」點。",
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			damage: 30,
			cost: [
				"Metal",
				"Colorless"
			]
		},
		{
			name: {
				'zh-tw': "力量猛攻",
				ja: "パワーラッシュ"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。",
				ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。"
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
		889
	]
}

export default card
