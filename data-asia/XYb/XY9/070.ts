import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ブニャット"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: [
		"Colorless"
	],
	stage: "Stage1",
	dexId: [
		432
	],
	description: {
		ja: "体を 大きく 見せて 相手を 威圧するため ふたまたの 尻尾で ウエストを ぎゅっと 絞っている。"
	},
	attacks: [
		{
			name: {
				ja: "きりさく"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "にゃんこプレス"
			},
			effect: {
				ja: "コインを1回投げオモテなら、40ダメージを追加。ウラなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
