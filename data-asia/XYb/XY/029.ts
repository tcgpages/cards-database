import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ"
	},
	illustrator: "MAHOU",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		25
	],
	description: {
		ja: "尻尾を 立てて まわりの 様子を 探っていると ときどき 雷が 尻尾に 落ちてくる。"
	},
	attacks: [
		{
			name: {
				ja: "ほっぺすりすり"
			},
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
			},
			cost: [
				"Colorless"
			]
		},
		{
			name: {
				ja: "でんこうせっか"
			},
			effect: {
				ja: "コインを1回投げオモテなら、10ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20+"
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
