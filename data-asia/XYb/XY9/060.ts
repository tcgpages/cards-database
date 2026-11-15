import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ナットレイ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: [
		"Metal"
	],
	stage: "Stage1",
	dexId: [
		598
	],
	description: {
		ja: "洞穴の 天井に はりつき 下を 通る 獲物に 向かって 鉄の トゲを 打ちこみ 襲う。"
	},
	attacks: [
		{
			name: {
				ja: "メタルクロー"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: 40
		},
		{
			name: {
				ja: "スパイクウィップ"
			},
			effect: {
				ja: "相手のポケモン全員に、それぞれにげるために必要なエネルギーの数×10ダメージ。［ベンチは弱点・抵抗力の計算をしない。］"
			},
			cost: [
				"Metal",
				"Colorless",
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
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
