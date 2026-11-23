import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ピクシー"
	},
	rarity: "Rare",
	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 110,
	types: [
		"Psychic"
	],
	stage: "Stage1",
	dexId: [
		36
	],
	description: {
		ja: "妖精の 仲間で めったに 人前に 出てこない。 気配を 感じて すぐに 逃げてしまうようだ。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ちゃめっけ"
			},
			effect: {
				ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンについているエネルギーを1個選び、相手の山札の上にもどす。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "ムーンキック"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "ピッピ"
	},
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
