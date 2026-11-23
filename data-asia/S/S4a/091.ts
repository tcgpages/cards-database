import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 蔥遊兵",
		ja: "ガラル ネギガナイト"
	},

	illustrator: "Ryota Murayama",

	category: "Pokemon",

	hp: 130,

	types: [
		"Fighting"
	],

	description: {
		'zh-tw': "只有歷經過無數戰鬥的大蔥鴨才能進化成這個樣子。當大蔥枯萎了就會離開戰場。",
		ja: "歴戦を 生き抜いた ものが この姿に 進化する。 ネギが 枯れるとき 戦場を 去る。"
	},

	evolveFrom: {
		ja: "ガラル カモネギ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "突刺",
				ja: "つきさす"
			},
			damage: 40,
			cost: [
				"Fighting"
			]
		},
		{
			name: {
				'zh-tw': "流星突擊",
				ja: "スターアサルト"
			},
			effect: {
				'zh-tw': "若使用了這個招式，則這隻寶可夢離開戰鬥場前無法使用「流星突擊」。",
				ja: "このワザを使ったなら、このポケモンは、バトル場をはなれるまで「スターアサルト」が使えない。"
			},
			damage: 180,
			cost: [
				"Fighting",
				"Colorless",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		865
	]
}

export default card
