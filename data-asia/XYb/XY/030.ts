import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ライチュウ"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Lightning"
	],
	evolveFrom: {
		ja: "ピカチュウ"
	},
	stage: "Stage1",
	dexId: [
		26
	],
	description: {
		ja: "電気が たまってくると 筋肉が 刺激され いつもより 攻撃的に なってしまう。"
	},
	attacks: [
		{
			name: {
				ja: "エレキサークル"
			},
			effect: {
				ja: "自分のベンチポケモンの数×20ダメージ。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "20×"
		},
		{
			name: {
				ja: "10まんボルト"
			},
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュする。"
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless"
			],
			damage: 100
		}
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],
	retreat: 0,
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
