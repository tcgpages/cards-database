import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ヒードラン"
	},
	illustrator: "Midori Harada",
	rarity: "None",
	category: "Pokemon",
	hp: 130,
	types: [
		"Metal"
	],
	stage: "Basic",
	dexId: [
		485
	],
	description: {
		ja: "火山の 洞穴に 生息。 十字の ツメを 食いこませて 壁や 天井を はい回る。"
	},
	attacks: [
		{
			name: {
				ja: "はがねおとし"
			},
			effect: {
				ja: "場にスタジアムが出ているなら、40ダメージを追加。"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: "40+"
		},
		{
			name: {
				ja: "スチームブラスト"
			},
			effect: {
				ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 130
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
	retreat: 3,
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
