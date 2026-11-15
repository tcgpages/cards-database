import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ガマゲロゲ"
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: [
		"Water"
	],
	stage: "Stage2",
	dexId: [
		537
	],
	description: {
		ja: "頭の コブから 神経を マヒさせる 液体を 飛ばす。 振動で 相手を 苦しめる。"
	},
	attacks: [
		{
			name: {
				ja: "すいあげる"
			},
			effect: {
				ja: "自分のトラッシュからエネルギーを3枚選び、このポケモンにつける。"
			},
			cost: [
				"Water"
			]
		},
		{
			name: {
				ja: "グラグラフォール"
			},
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			cost: [
				"Water",
				"Water",
				"Water",
				"Water"
			],
			damage: 90
		}
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		}
	],
	retreat: 3,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
