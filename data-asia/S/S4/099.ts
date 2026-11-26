import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "清洗水能量",
		ja: "ウォッシュ水エネルギー"
	},

	category: "Energy",

	effect: {
		'zh-tw': "只要這張卡附於寶可夢身上，視為提供1個【水】能量。 附有這張卡的【水】寶可夢，不會受到對手的寶可夢使用招式的效果的影響。（已經受到的效果無法消除。）",
		ja: "このカードは、ポケモンについているかぎり、水エネルギー1個ぶんとしてはたらく。 このカードをつけている水ポケモンは、相手のポケモンが使うワザの効果を受けない。（すでに受けている効果は、なくならない。）"
	},

	energyType: "Special",

	regulationMark: "D",

	rarity: "Uncommon",

	variants: [
		{
			type: "normal",
			languages: [
				"ja"
			]
		}
	]
}

export default card
