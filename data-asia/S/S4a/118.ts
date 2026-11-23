import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "胡帕",
		ja: "フーパ"
	},

	illustrator: "so-taro",

	category: "Pokemon",

	hp: 120,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "據說會用６個圓環和６隻巨大的手臂奪走一切東西。力量被封印而變成了嬌小的樣子。",
		ja: "気に入った ものを リングを 使い 秘密の 住処へ 集めている。 リングを 潜って テレポートする。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "進擊之門",
				ja: "アサルトゲート"
			},
			effect: {
				'zh-tw': "在這個回合，若沒有從備戰區將這隻寶可夢放置於戰鬥場，則這個招式失敗。這個招式的傷害不計算弱點。",
				ja: "この番、このポケモンがベンチからバトル場に出ていないなら、このワザは失敗。このワザのダメージは弱点を計算しない。"
			},
			damage: 90,
			cost: [
				"Darkness"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		720
	]
}

export default card
