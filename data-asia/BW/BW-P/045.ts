import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ギギギアル"
	},
	rarity: "Promo",
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 150,
	types: [
		"Metal"
	],
	stage: "Stage2",
	dexId: [
		601
	],
	description: {
		ja: "赤い コアの ついた ギアを 高速回転させて エネルギーを 急速チャージ するのだ。"
	},
	attacks: [
		{
			name: {
				ja: "チャージビーム"
			},
			effect: {
				ja: "自分のトラッシュからエネルギーを1枚選び、このポケモンにつける。"
			},
			cost: [
				"Metal"
			],
			damage: 30
		},
		{
			name: {
				ja: "でんじほう"
			},
			effect: {
				ja: "コインを1回投げウラなら、次の自分の番、このポケモンは「でんじほう」を使えない。"
			},
			cost: [
				"Metal",
				"Colorless",
				"Colorless"
			],
			damage: 80
		}
	],
	evolveFrom: {
		ja: "ギギアル"
	},
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
	retreat: 4
}

export default card
