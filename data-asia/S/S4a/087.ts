import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "多龍巴魯托",
		ja: "ドラパルト"
	},

	illustrator: "Shin Nagasawa",

	category: "Pokemon",

	hp: 150,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "讓多龍梅西亞住在自己角上的洞裡。戰鬥開始後會用音速將多龍梅西亞發射出去。",
		ja: "ツノの 穴に ドラメシヤを 入れて 暮らす。 戦いになると マッハの スピードで ドラメシヤを 飛ばす。"
	},

	evolveFrom: {
		ja: "ドロンチ"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "穿透",
				ja: "すりぬけ"
			},
			effect: {
				'zh-tw': "當這隻寶可夢受到招式的傷害時，己方擲1次硬幣。若為正面，則這隻寶可夢不會受到那個傷害。",
				ja: "このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "潛靈奇襲",
				ja: "ゴーストダイブ"
			},
			effect: {
				'zh-tw': "將3個傷害指示物以任意方式放置於對手的備戰寶可夢身上。",
				ja: "ダメカン3個を、相手のベンチポケモンに好きなようにのせる。"
			},
			damage: 120,
			cost: [
				"Psychic",
				"Psychic"
			]
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

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		887
	]
}

export default card
