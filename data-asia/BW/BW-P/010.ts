import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ギガイアス"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 140,
	types: [
		"Fighting"
	],
	stage: "Stage2",
	dexId: [
		526
	],
	description: {
		ja: "体に 生えた オレンジ色の 結晶で 太陽光線を 吸収した エネルギーを 体内で 増幅させ 口から 撃ち出す。"
	},
	attacks: [
		{
			name: {
				ja: "けずりだす"
			},
			effect: {
				ja: "自分の山札を上から5枚トラッシュし、その中の[闘]エネルギーをすべて、このポケモンにつける。"
			},
			cost: [
				"Fighting"
			]
		},
		{
			name: {
				ja: "ロックバレット"
			},
			effect: {
				ja: "このポケモンについている[闘]エネルギーの数×20ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		}
	],
	evolveFrom: {
		ja: "ガントル"
	},
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 4
}

export default card
