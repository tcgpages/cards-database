import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "マメパト"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 50,
	types: [
		"Colorless"
	],
	stage: "Basic",
	dexId: [
		519
	],
	description: {
		ja: "トレーナーの 命令を よく 聞く 性格だが 難しい 指示は 理解 できない こともある。"
	},
	attacks: [
		{
			name: {
				ja: "かぜおこし"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
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
