import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "カジッチュ"
	},
	rarity: "Common",
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 40,
	types: [
		"Grass"
	],
	stage: "Basic",
	dexId: [
		840
	],
	description: {
		ja: "一生 りんごの 中で 暮らし 天敵の 鳥ポケモンに 出会うと りんごの 振りをして 身を守る。"
	},
	attacks: [
		{
			name: {
				ja: "からにこもる"
			},
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。"
			},
			cost: [
				"Colorless"
			]
		}
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
