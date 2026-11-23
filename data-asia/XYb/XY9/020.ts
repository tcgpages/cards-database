import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "スイクン"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		245
	],
	description: {
		ja: "一瞬で 汚く 濁った 水も 清める 力を 持つ。 北風の 生まれ変わり という。"
	},
	abilities: [
		{
			name: {
				ja: "かぜのまもり"
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、自分のポケモン全員は、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果はなくならない。）"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "オーロラビーム"
			},
			cost: [
				"Water",
				"Water",
				"Water"
			],
			damage: 110
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
