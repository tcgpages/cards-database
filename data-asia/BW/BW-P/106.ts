import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ルカリオ"
	},
	rarity: "Promo",
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: [
		"Fighting"
	],
	stage: "Stage1",
	dexId: [
		448
	],
	description: {
		ja: "鍛えられた ルカリオは 波動を 使い １キロ先に だれがいるのか どんな気持ちか さえも わかる。"
	},
	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ストライクバック"
			},
			effect: {
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを2個のせる。"
			}
		}
	],
	attacks: [
		{
			name: {
				ja: "はどうだん"
			},
			effect: {
				ja: "相手のベンチポケモンを1匹選び、そのポケモンにも20ダメージ。[ベンチへのダメージは弱点・抵抗力の計算をしない。]"
			},
			cost: [
				"Fighting",
				"Fighting"
			],
			damage: 50
		}
	],
	evolveFrom: {
		ja: "ルカリオGX"
	},
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],
	retreat: 1
}

export default card
