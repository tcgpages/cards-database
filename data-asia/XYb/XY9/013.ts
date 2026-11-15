import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤドン"
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Water"
	],
	stage: "Basic",
	dexId: [
		79
	],
	description: {
		ja: "水辺で ボーッとしている。 なにかが 尻尾に かみついても まる１日 気づかない。"
	},
	attacks: [
		{
			name: {
				ja: "ずつき"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "すてきなしっぽ"
			},
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せてから、手札に加える。そして山札を切る。"
			},
			cost: [
				"Colorless",
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 2,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
