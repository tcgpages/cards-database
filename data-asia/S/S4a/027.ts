import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "焚焰蚣V",
		ja: "マルヤクデV"
	},

	illustrator: "5ban Graphics",

	category: "Pokemon",

	hp: 210,

	types: [
		"Fire"
	],

	dexId: [
		851
	],
	stage: "Basic",

	suffix: "V",

	attacks: [
		{
			name: {
				'zh-tw': "熱放射",
				ja: "ねつほうしゃ"
			},
			effect: {
				'zh-tw': "若希望，選擇1個這隻寶可夢身上附加的能量，將其丟棄。這個情況下，選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
				ja: "のぞむなら、このポケモンについているエネルギーを1個選び、トラッシュする。その場合、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			damage: 20,
			cost: [
				"Fire"
			]
		},
		{
			name: {
				'zh-tw': "燃燒列車",
				ja: "バーニングトレイン"
			},
			damage: 180,
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Fire"
			]
		}
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],

	retreat: 3,

	regulationMark: "D",

	rarity: "Holo Rare V",

	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
