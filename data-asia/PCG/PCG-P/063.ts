import { Card } from "../../../interfaces"
import Set from "../PCG-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ジュカイン",
	},
	rarity: "Promo",
	category: "Pokemon",
	illustrator: "Mitsuhiro Arita",
	hp: 100,
	types: [
		"Grass",
	],
	stage: "Stage2",
	evolveFrom: {
		ja: "ジュプトル",
	},
	dexId: [
		254,
	],
	abilities: [
		{
			type: "Poke-BODY",
			name: {
				ja: "グリーンエキス",
			},
			effect: {
				ja: "{G}エネルギーがついている自分のバトルポケモン全員は、特殊状態にならず、そのポケモンが受けている特殊状態は、すべて消える。",
			},
		},
	],
	attacks: [
		{
			name: {
				ja: "はっぱカッター",
			},
			cost: [
				"Grass",
			],
			damage: 30,
		},
		{
			name: {
				ja: "スピードスター",
			},
			effect: {
				ja: "このワザは、相手の弱点・抵抗力・すべての効果に関係なく、ダメージを与える。",
			},
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			damage: 60,
		},
	],
	weaknesses: [
		{
			type: "Fire",
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30",
		},
	],
	retreat: 2,
	variants: [
		{
			type: "normal",
		},
	],
}

export default card
