import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ルギアEX"
	},
	illustrator: "Eske Yoshinob",
	rarity: "None",
	category: "Pokemon",
	hp: 170,
	types: [
		"Colorless"
	],
	stage: "Basic",
	suffix: "EX",
	attacks: [
		{
			name: {
				ja: "エアロボール"
			},
			effect: {
				ja: "おたがいのバトルポケモンについているエネルギーの数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "ディープハリケーン"
			},
			effect: {
				ja: "場にスタジアムが出ているなら、70ダメージを追加。その後、そのスタジアムをトラッシュする。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "80+"
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
	retreat: 2,
	variants: [
		{
			type: "holo"
		}
	]
}

export default card
