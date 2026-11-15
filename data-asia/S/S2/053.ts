import { Card } from "../../../interfaces"
import Set from "../S2"

const card: Card = {
	set: Set,
	name: {
		ja: "チャーレム"
	},
	rarity: "Uncommon",
	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 110,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		308
	],
	description: {
		ja: "ヨガの 修行で 鍛えられた サイコパワーで 相手の 動きを 予測する ことが できるのだ。"
	},
	attacks: [
		{
			name: {
				ja: "ヨガキック"
			},
			effect: {
				ja: "このワザのダメージは弱点・抵抗力を計算しない。"
			},
			cost: [
				"Fighting"
			],
			damage: 40
		},
		{
			name: {
				ja: "サイコキネシス"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×20ダメージ追加。"
			},
			cost: [
				"Colorless",
				"Colorless",
				"Colorless"
			],
			damage: "60+"
		}
	],
	evolveFrom: {
		ja: "チャーレムex"
	},
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1,
	variants: [
		{
			type: "normal"
		}
	]
}

export default card
