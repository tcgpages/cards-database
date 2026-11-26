import { Card } from "../../../interfaces"
import Set from "../XY9"

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 100,
	types: [
		"Lightning"
	],
	evolveFrom: {
		ja: "シママ"
	},
	stage: "Stage1",
	dexId: [
		523
	],
	description: {
		ja: "稲妻のような 瞬発力。 ゼブライカが 全速力で 走ると 雷鳴が 響きわたる。"
	},
	abilities: [
		{
			name: {
				ja: "ゼブラゾーン"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の雷ポケモンが使うワザのダメージは、相手のバトルポケモンにかかっている効果の計算をしない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "げきついボルト"
			},
			effect: {
				ja: "相手のバトルポケモンが闘タイプの抵抗力を持っているなら、60ダメージを追加。"
			},
			cost: [
				"Colorless",
				"Colorless"
			],
			damage: "50+"
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
	retreat: 1,
	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st-edition"]
		}
	]
}

export default card
