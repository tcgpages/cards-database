import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "カメール"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: [
		"Water"
	],
	stage: "Stage1",
	dexId: [
		8
	],
	description: {
		ja: "１万年の 寿命を 持つと 言われている。 ふさふさの しっぽは 長生きの シンボルとして人気。"
	},
	attacks: [
		{
			name: {
				ja: "たいあたり"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: 20
		},
		{
			name: {
				ja: "スマッシュターン"
			},
			effect: {
				ja: "このポケモンをベンチポケモンと入れ替える。"
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless"
			],
			damage: 40
		}
	],
	evolveFrom: {
		ja: "ゼニガメ"
	},
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2
}

export default card
