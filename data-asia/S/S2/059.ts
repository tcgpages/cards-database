import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "トロッゴン"
	},
	rarity: "Common",
	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 100,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		838
	],
	description: {
		ja: "体内で 石炭を つくりだす。 昔の ガラルでは 落とした 石炭を 生活に 利用した。"
	},
	attacks: [
		{
			name: {
				ja: "ぶつかる"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "ヒートスタンプ"
			},
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "タンドン"
	},
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
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
