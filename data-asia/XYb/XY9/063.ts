import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラミドロ"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: [
		"Dragon"
	],
	stage: "Stage1",
	dexId: [
		691
	],
	description: {
		ja: "ドラミドロが 住む 海域に 迷いこんだ 船は ２度と 生きて 戻れないと 言われている。"
	},
	attacks: [
		{
			name: {
				ja: "バッドポイズン"
			},
			effect: {
				ja: "相手のバトルポケモンをどくにする。ポケモンチェックのとき、このどくでのせるダメカンの数は4個になる。"
			},
			cost: [
				"Psychic"
			]
		},
		{
			name: {
				ja: "りゅうのはどう"
			},
			effect: {
				ja: "自分の山札を上から1枚トラッシュする。"
			},
			cost: [
				"Water",
				"Psychic"
			],
			damage: 60
		}
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
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
