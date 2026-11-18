import { Card } from "../../../interfaces"
import Set from "../S4a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "草路競技場",
		ja: "ターフスタジアム"
	},

	illustrator: "aky CG Works",

	category: "Trainer",

	effect: {
		'zh-tw': "雙方玩家在每個自己的回合時，可使用1次，可從自己的牌庫選擇1張【草】屬性的進化寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分の山札から草タイプの進化ポケモンを1枚選び、相手に見せて、手札に加えてよい。そして山札を切る。"
	},

	trainerType: "Stadium",

	regulationMark: "D",

	rarity: "None"
}

export default card
