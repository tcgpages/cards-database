import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ホワイトキュレム"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 130,
	types: [
		"Dragon"
	],
	stage: "Basic",
	dexId: [
		646
	],
	description: {
		ja: "失った 体を 真実と 理想で 埋めてくれる 英雄を 待つ 氷の 伝説ポケモン。"
	},
	attacks: [
		{
			name: {
				ja: "ダメージラッシュ"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、オモテの数×20ダメージ。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "つめたいほのお"
			},
			effect: {
				ja: "コインを1回投げオモテなら、40ダメージを追加。"
			},
			cost: [
				"Fire",
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: "80+"
		}
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
