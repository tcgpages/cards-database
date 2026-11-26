import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,
	name: {
		ja: "ドラパルト"
	},
	illustrator: "Naoki Saito",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 150,
	types: [
		"Psychic"
	],
	evolveFrom: {
		ja: "ドロンチ"
	},
	stage: "Stage2",
	dexId: [
		887
	],
	description: {
		ja: "ツノの 穴に ドラメシヤを 入れて 暮らす。 戦いになると マッハの スピードで ドラメシヤを 飛ばす。"
	},
	abilities: [
		{
			name: {
				ja: "すりぬけ"
			},
			effect: {
				ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。"
			},
			type: "Ability"
		}
	],
	attacks: [
		{
			name: {
				ja: "ゴーストダイブ"
			},
			effect: {
				ja: "ダメカン3個を、相手のベンチポケモンに好きなようにのせる。"
			},
			cost: [
				"Psychic",
				"Psychic"
			],
			damage: 120
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
	retreat: 0,
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
