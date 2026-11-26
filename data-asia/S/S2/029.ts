import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ビリリダマ"
	},
	rarity: "Common",
	illustrator: "Hasegawa Saki",
	category: "Pokemon",
	hp: 50,
	types: [
		"Lightning"
	],
	stage: "Basic",
	dexId: [
		100
	],
	description: {
		ja: "発電所などに 現れる。 モンスターボールと 間違えて 触って しびれる 人が 多い。"
	},
	attacks: [
		{
			name: {
				ja: "れんぞくころがり"
			},
			effect: {
				ja: "ウラが出るまでコインを投げ、オモテの数×20ダメージ。"
			},
			cost: [
				"Colorless"
			],
			damage: "20×"
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
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
