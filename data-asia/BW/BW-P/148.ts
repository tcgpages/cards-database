import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "チルタリス"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 70,
	types: [
		"Dragon"
	],
	stage: "Stage1",
	dexId: [
		334
	],
	description: {
		ja: "心が 通い合った 人がいると やわらかく 美しい 羽で そっと 包み込み ハミングする。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "たたかいのうた"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分の[竜]ポケモンが使うワザの、バトルポケモンへのダメージは「+20」される。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "かっくう"
			},
			cost: [
				"Water",
				"Metal",
				"Colorless"
			],
			damage: 40
		}
	],
	evolveFrom: {
		ja: "チルタリスGX"
	},
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
