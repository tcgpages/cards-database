import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "ブーバーン"
	},
	rarity: "Uncommon",
	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 140,
	types: [
		"Fire"
	],
	stage: "Stage1",
	dexId: [
		467
	],
	description: {
		ja: "火の玉を 撃ちだして 敵を 仕留める。 まっくろコゲに なるので 獲物を とるときには 使わない。"
	},
	attacks: [
		{
			name: {
				ja: "バーストパンチ"
			},
			effect: {
				ja: "相手のバトルポケモンをやけどにする。"
			},
			cost: [
				"Fire",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "グラウンドバーン"
			},
			effect: {
				ja: "おたがいの山札を上から1枚ずつトラッシュし、その中のエネルギーの枚数×100ダメージ追加。"
			},
			cost: [
				"Fire",
				"Fire",
				"Colorless"
			],
			damage: "80+"
		}
	],
	evolveFrom: {
		ja: "ブーバー"
	},
	weaknesses: [
		{
			type: "Water",
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
