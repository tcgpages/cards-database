import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ギャロップ"
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ガラル ポニータ"
	},
	stage: "Stage1",
	dexId: [
		78
	],
	description: {
		ja: "勇猛果敢で 誇り 高い。 足先の 毛に サイコパワーを ためて 軽やかに 森を 駆ける。"
	},
	abilities: [
		{
			name: {
				ja: "パステルベール"
			},
			effect: {
				ja: "このポケモンがいるかぎり、自分のポケモン全員は、特殊状態にならず、受けている特殊状態は、すべて回復する。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "サイコキネシス"
			},
			effect: {
				ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
			},
			cost: [
				"Psychic",
				"Colorless"
			],
			damage: "30+"
		}
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		}
	],
	retreat: 1,
	regulationMark: "D",
	variants: [
		{
			type: "holo",
			languages: [
				"ja"
			]
		}
	]
}

export default card
