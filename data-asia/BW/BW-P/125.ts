import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "エンペルト"
	},
	rarity: "Promo",
	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 140,
	types: [
		"Water"
	],
	stage: "Stage2",
	dexId: [
		395
	],
	description: {
		ja: "プライドを 傷つける 者は 流氷をも 切断する 翼で 真っ二つに する。"
	},
	attacks: [
		{
			name: {
				ja: "みだれづき"
			},
			effect: {
				ja: "コインを3回投げ、オモテの数×30ダメージ。"
			},
			cost: [
				"Water"
			],
			damage: "30×"
		},
		{
			name: {
				ja: "コールドクラッシュ"
			},
			effect: {
				ja: "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュしてよい。その場合、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	evolveFrom: {
		ja: "ポッタイシ"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
