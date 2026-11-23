import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "啃果蟲",
		ja: "カジッチュ"
	},

	illustrator: "Kagemaru Himeno",

	category: "Pokemon",

	hp: 40,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "終其一生都在蘋果裡度過。遇到天敵鳥寶可夢時，會裝成蘋果保護自己。",
		ja: "一生 りんごの 中で 暮らし 天敵の 鳥ポケモンに 出会うと りんごの 振りをして 身を守る。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "縮入殼中",
				ja: "からにこもる"
			},
			effect: {
				'zh-tw': "擲1次硬幣若為正面，則在下個對手的回合，這隻寶可夢不會受到招式的傷害。",
				ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージを受けない。"
			},
			cost: [
				"Colorless"
			]
		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		}
	],

	retreat: 1,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		840
	]
}

export default card
