import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ハッサムEX"
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: [
		"Metal"
	],
	dexId: [
		212
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "はがねのつばさ"
			},
			effect: {
				ja: "次の相手の番、このポケモンが受けるワザのダメージは「-20」される。"
			},
			cost: [
				"Metal"
			],
			damage: 20
		},
		{
			name: {
				ja: "しっぷうづき"
			},
			effect: {
				ja: "この番、このポケモンがベンチからバトル場に出ていたなら、60ダメージを追加。"
			},
			cost: [
				"Metal",
				"Metal"
			],
			damage: "50+"
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 2,
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
