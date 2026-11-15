import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ジラーチ"
	},
	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		385
	],
	description: {
		ja: "１０００年間で ７日だけ 目を 覚まし どんな 願い事でも かなえる 力を 使うという。"
	},
	attacks: [
		{
			name: {
				ja: "スターダスト"
			},
			effect: {
				ja: "相手のバトルポケモンについている特殊エネルギーを1個選び、トラッシュする。トラッシュした場合、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
			},
			cost: [
				"Colorless"
			],
			damage: 10
		},
		{
			name: {
				ja: "ゆめみのまい"
			},
			effect: {
				ja: "おたがいのバトルポケモンを、それぞれねむりにする。"
			},
			cost: [
				"Metal",
				"Colorless"
			],
			damage: 20
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
			foil: "mirror"
		}
	]
}

export default card
