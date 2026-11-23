import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "伽勒爾 喵喵",
		ja: "ガラル ニャース"
	},

	illustrator: "Misa Tsutsui",

	category: "Pokemon",

	hp: 60,

	types: [
		"Metal"
	],

	description: {
		'zh-tw': "和好戰的海洋民族一起生活，久而久之身體的各個地方就都變成了黑鐵。",
		ja: "戦闘的な 海洋民族と 暮らすうちに 鍛えられ 体の あちこちが 黒鉄に 変化した。"
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "進化戰吼",
				ja: "しんかのおたけび"
			},
			effect: {
				'zh-tw': "在自己的回合時，若將自己的2張手牌丟棄，則可使用1次。從自己的牌庫選擇1張「伽勒爾 喵頭目」卡，在給對手看過後加入手牌。並且重洗牌庫。",
				ja: "自分の番に、自分の手札を2枚トラッシュするなら、1回使える。自分の山札から「ガラル ニャイキング」を1枚選び、相手に見せて、手札に加える。そして山札を切る。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "抓",
				ja: "ひっかく"
			},
			damage: 20,
			cost: [
				"Metal",
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

	resistances: [
		{
			type: "Grass",
			value: "-30"
		}
	],

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "normal", languages: ["ja"] },
		{ type: "reverse", languages: ["ja"] }
	],

	dexId: [
		52
	]
}

export default card
