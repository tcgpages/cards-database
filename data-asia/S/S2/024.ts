import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ガマガル"
	},
	rarity: "Common",
	illustrator: "MAHOU",
	category: "Pokemon",
	hp: 90,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		536
	],
	description: {
		ja: "頭痛を 起こすほどの 音波で 獲物を じゅうぶん 弱らせて ネバネバした ベロで 絡めとる。"
	},
	attacks: [
		{
			name: {
				ja: "ぐるぐるサイン"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		}
	],
	evolveFrom: {
		ja: "オタマロ"
	},
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
