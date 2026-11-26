import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "狙射樹梟",
		ja: "ジュナイパー"
	},

	illustrator: "Souichirou Gunjima",

	category: "Pokemon",

	hp: 140,

	types: [
		"Grass"
	],

	description: {
		'zh-tw': "會像射箭那樣射出藏在自己翅膀裡的箭羽。只要瞄準目標就絕不會射偏。",
		ja: "翼に 仕込まれた 矢羽根を 弓矢のように つがえて 放つ。 狙った 的は 外さない。"
	},

	evolveFrom: {
		ja: "フクスロー"
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'zh-tw': "密林迷彩",
				ja: "みつりんめいさい"
			},
			effect: {
				'zh-tw': "這隻寶可夢不會受到對手的「寶可夢【V】・【GX】」招式的傷害。",
				ja: "このポケモンは、相手の「ポケモンV・GX」からワザのダメージを受けない。"
			}
		}
	],

	attacks: [
		{
			name: {
				'zh-tw': "分岔箭",
				ja: "スプリットアロー"
			},
			effect: {
				'zh-tw': "對手的2隻備戰寶可夢也各受到20點傷害。[在備戰區不計算弱點・抵抗力。]",
				ja: "相手のベンチポケモン2匹にも、それぞれ20ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
			},
			damage: 90,
			cost: [
				"Grass",
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

	retreat: 2,

	regulationMark: "D",

	rarity: "None",

	variants: [
		{ type: "holo", languages: ["ja"] }
	],

	dexId: [
		724
	]
}

export default card
