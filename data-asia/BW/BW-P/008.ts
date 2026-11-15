import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "コアルヒー"
	},
	rarity: "Promo",
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		580
	],
	description: {
		ja: "敵に 襲われると 全身の 羽毛から 水しぶきを 出す。 水煙に 紛れて 逃げるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "みずでっぽう"
			},
			cost: [
				"Water"
			],
			damage: 10
		}
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
