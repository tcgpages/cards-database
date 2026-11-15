import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 泥巴魚",
		ja: "ガラル マッギョ"
	},

	illustrator: "Kouki Saitou",

	category: "Pokemon",

	hp: 120,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "棲息在富含鐵質的泥巴裡，因此獲得了結實堅固的鋼鐵身軀。",
		ja: "鉄分 たっぷりの 泥の 中で 生息していたため 頑丈な 鋼の 体に 変化した。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "捕獸夾",
				ja: "トラバサミ"
			},
			effect: {
				'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害時，選擇1個使用招式的寶可夢身上附加的能量，將其丟棄。",
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンについているエネルギーを1個選び、トラッシュする。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "傷害衝刺",
				ja: "ダメージラッシュ"
			},
			effect: {
				'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。",
				ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。"
			},
			damage: "30+",
			cost: [
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
		618
	]
}

export default card
