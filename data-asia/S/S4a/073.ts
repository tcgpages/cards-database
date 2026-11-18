import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 魔靈珊瑚",
		ja: "ガラル サニゴーン"
	},

	illustrator: "Kagemaru Himeno",

	category: "Pokemon",

	hp: 100,

	types: [
		"Psychic"
	],

	description: {
		'zh-tw': "靈力增強之後從殼裡被解放出來。用靈體保護著內核中的靈魂。",
		ja: "霊力が 高まり 殻から 解き放たれた。 霊体で 核の 魂を 守っている。"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "滅亡之軀",
				ja: "ほろびのボディ"
			},
			effect: {
				'zh-tw': "當這隻寶可夢在戰鬥場上受到對手的寶可夢招式的傷害而【氣絕】時，己方擲1次硬幣。若為正面，則將使用招式的寶可夢【氣絕】。",
				ja: "このポケモンが、バトル場で相手のポケモンからワザのダメージを受けてきぜつしたとき、自分はコインを1回投げる。オモテなら、ワザを使ったポケモンをきぜつさせる。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "窮追不捨",
				ja: "おいつめる"
			},
			effect: {
				'zh-tw': "在下個對手的回合，受到這個招式的寶可夢無法撤退。",
				ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
			},
			damage: 60,
			cost: [
				"Psychic",
				"Colorless"
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	dexId: [
		864
	]
}

export default card
