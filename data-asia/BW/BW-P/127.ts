import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "プリン"
	},
	rarity: "Promo",
	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 60,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		39
	],
	description: {
		ja: "つぶらな ひとみが ゆれるとき だれもが 眠くなってしまう 子守歌を 歌いはじめる。"
	},
	attacks: [
		{
			name: {
				ja: "れんぞくころがり"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ続け、オモテの数×10ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: "10×"
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
