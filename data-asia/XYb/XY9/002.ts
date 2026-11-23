import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ベイリーフ"
	},
	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	types: [
		"Grass"
	],
	evolveFrom: {
		ja: "チコリータ"
	},
	stage: "Stage1",
	dexId: [
		153
	],
	description: {
		ja: "首回りの つぼみから におう スパイシーな 香りは かいだ 人を 元気に させる。"
	},
	attacks: [
		{
			name: {
				ja: "のしかかり"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "つるのムチ"
			},
			cost: [
				"Grass",
				"Colorless"
			],
			damage: 30
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
