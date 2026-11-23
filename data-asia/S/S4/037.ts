import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷電斑馬",
		ja: "ゼブライカ"
	},

	illustrator: "0313",

	category: "Pokemon",

	hp: 110,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "有著閃電般的爆發力。如果雷電斑馬全速奔馳，雷聲就會響徹雲霄。",
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。"
	},

	evolveFrom: {
		ja: "シママ"
	},
	stage: "Stage1",

	attacks: [
		{
			name: {
				'zh-tw': "踢倒",
				ja: "けたぐり"
			},
			damage: 30,
			cost: [
				"Lightning"
			]
		},
		{
			name: {
				'zh-tw': "電氣踢",
				ja: "エレキック"
			},
			damage: 70,
			cost: [
				"Lightning",
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "Common",

	dexId: [
		523
	],

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
