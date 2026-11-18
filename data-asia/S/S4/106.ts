import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ネギガナイトV"
	},
	illustrator: "PLANETA Tsuji",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: [
		"Fighting"
	],
	stage: "Basic",
	suffix: "V",
	abilities: [
		{
			name: {
				ja: "ちかいのやり"
			},
			effect: {
				ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについている闘エネルギーを好きなだけ選び、このポケモンにつけ替える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "フォールスター"
			},
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。"
			},
			cost: [
				"Fighting",
				"Fighting",
				"Colorless"
			],
			damage: 200
		}
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 2,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
