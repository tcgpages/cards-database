import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "冰砌鵝",
		ja: "コオリッポ"
	},

	illustrator: "Kagemaru Himeno",

	category: "Pokemon",

	hp: 120,

	types: [
		"Water"
	],

	description: {
		'zh-tw': "從非常寒冷的地方漂流而來。隨時都用冰塊冰鎮著自己的臉。",
		ja: "とても 寒い 場所から 流れ 流されて やってきた。 氷で 顔を つねに 冷やして いるのだ。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "結凍頭",
				ja: "アイスフェイス"
			},
			effect: {
				'zh-tw': "若這隻寶可夢的HP是全滿的狀態，則這隻寶可夢受到對手的寶可夢招式的傷害「-60」點。",
				ja: "このポケモンのHPがまんたんの状態なら、このポケモンが相手のポケモンから受けるワザのダメージは「-60」される。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "暴風雪",
				ja: "ふぶき"
			},
			effect: {
				'zh-tw': "對手的所有備戰寶可夢也各受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "相手のベンチポケモン全員にも、それぞれ10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			damage: 70,
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Metal",
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
		875
	]
}

export default card
