import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "霹靂電球",
		ja: "ビリリダマ"
	},

	illustrator: "Sekio",

	category: "Pokemon",

	hp: 60,

	types: [
		"Lightning"
	],

	description: {
		'zh-tw': "會出現在發電廠等地方。很多人會把牠錯當成精靈球去觸碰而被電麻。",
		ja: "発電所などに 現れる。 モンスターボールと 間違えて 触って しびれる 人が 多い。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "電球",
				ja: "エレキボール"
			},
			damage: 40,
			cost: [
				"Lightning",
				"Lightning"
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
		100
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
