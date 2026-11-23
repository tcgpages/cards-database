import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "イーブイ"
	},
	variants: [{ type: "holo" }],
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		133
	],
	description: {
		ja: "不安定な 遺伝子の おかげで さまざまな 進化の 可能性を 秘めている 特殊な ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "なきごえ"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンが使うワザのダメージは「-20」される。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "でんこうせっか"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "10+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
