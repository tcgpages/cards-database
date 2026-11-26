import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "パルシェン"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: [
		"Water"
	],
	evolveFrom: {
		ja: "シェルダー"
	},
	stage: "Stage1",
	dexId: [
		91
	],
	description: {
		ja: "殻が 非常に 硬く ナパーム弾でも 壊せない。 攻撃するときだけ 開く。"
	},
	attacks: [
		{
			name: {
				ja: "いきなりはさむ"
			},
			effect: {
				ja: "この番、このポケモンが「シェルダー」から進化していたなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Water"
			],
			damage: 10
		},
		{
			name: {
				ja: "なみのり"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 70
		}
	],
	weaknesses: [
		{
			type: "Grass",
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
