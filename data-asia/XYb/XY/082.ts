import { Card } from "../../../interfaces"
import Set from "../XY"

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン"
	},
	illustrator: "match",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: [
		"Metal"
	],
	evolveFrom: {
		ja: "ドーミラー"
	},
	stage: "Stage1",
	dexId: [
		437
	],
	description: {
		ja: "雨雲を 呼べる ポケモンとして 大昔から まつられていた。 ときどき 地面に 埋められている。"
	},
	abilities: [
		{
			name: {
				ja: "メタルチェーン"
			},
			effect: {
				ja: "自分のトラッシュから鋼エネルギーを1枚選び、ベンチポケモンにつける。この特性は、自分の番に1回使える。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ぶちかます"
			},
			cost: [
				"Metal",
				"Metal",
				"Colorless"
			],
			damage: 60
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
