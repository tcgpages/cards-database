import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "エースバーン"
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 170,
	types: [
		"Fire"
	],
	stage: "Stage2",
	dexId: [
		815
	],
	description: {
		ja: "攻守に 優れ 応援されると さらに 燃えるが スタンドプレイに 走り ピンチを 招くこともある。"
	},
	abilities: [
		{
			name: {
				ja: "リベロ"
			},
			effect: {
				ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分のトラッシュから炎エネルギーを2枚まで選び、このポケモンにつける。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "フレアストライカー"
			},
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: 190
		}
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		}
	],
	retreat: 1,
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
