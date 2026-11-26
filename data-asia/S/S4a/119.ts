import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "偷兒狐",
		ja: "クスネ"
	},

	illustrator: "kirisAki",

	category: "Pokemon",

	hp: 70,

	types: [
		"Darkness"
	],

	description: {
		'zh-tw': "靠搶奪其他寶可夢找到的食物為生。腳上長著軟乎乎的肉球，走路時不會發出絲毫聲響。",
		ja: "ほかの ポケモンが みつけた 餌を 掠めて 暮らしている。 ふかふかの 肉球は 足音を たてない。"
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'zh-tw': "唆使",
				ja: "そそのかす"
			},
			effect: {
				'zh-tw': "對手將對手自己的手牌全部翻回反面並重洗，放回對手的牌庫下方。然後，對手從牌庫抽出3張卡。",
				ja: "相手は相手自身の手札をすべてウラにして切り、相手の山札の下にもどす。その後、相手は山札を3枚引く。"
			},
			cost: [
				"Darkness"
			]
		}
	],

	weaknesses: [
		{
			type: "Grass",
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
		827
	]
}

export default card
