import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ガブリアス"
	},
	illustrator: "TOKIYA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: [
		"Fighting"
	],
	evolveFrom: {
		ja: "ガバイト"
	},
	stage: "Stage2",
	dexId: [
		445
	],
	description: {
		ja: "ジェット戦闘機に 負けない スピードで 空を 飛ぶ。 ねらった 獲物は 逃がさない。"
	},
	attacks: [
		{
			name: {
				ja: "アサルトターボ"
			},
			effect: {
				ja: "自分のトラッシュからエネルギーを1枚選び、自分のポケモンにつける。"
			},
			cost: [
				"Fighting"
			],
			damage: 60
		},
		{
			name: {
				ja: "かみちぎる"
			},
			effect: {
				ja: "相手のバトルポケモンが「ポケモンEX」なら、80ダメージを追加。"
			},
			cost: [
				"Fighting",
				"Fighting"
			],
			damage: "80+"
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 0,
	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"]
		}
	]
}

export default card
