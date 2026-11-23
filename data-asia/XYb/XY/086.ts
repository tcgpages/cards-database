import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ゲノセクトEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 180,
	types: [
		"Metal"
	],
	dexId: [
		649
	],
	stage: "Basic",
	suffix: "EX",
	abilities: [
		{
			name: {
				ja: "カセットチェンジ"
			},
			effect: {
				ja: "このポケモンについている「ポケモンのどうぐ」を、自分の手札にもどす。この特性は、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ラピッドブラスター"
			},
			effect: {
				ja: "このポケモンについている鋼エネルギーを好きなだけトラッシュし、トラッシュした鋼エネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Metal",
				"Metal",
				"Metal"
			],
			damage: "100+"
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
		}
	]
}

export default card
