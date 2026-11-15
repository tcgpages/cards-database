import { Card } from "../../../interfaces"
import Set from "../S4"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "聯盟職員",
		ja: "リーグスタッフ"
	},

	illustrator: "Emi Ando",

	category: "Trainer",

	effect: {
		'zh-tw': "從自己的牌庫抽出2張卡。若場上有「宮門競技場」，則再抽出2張卡。",
		ja: "自分の山札を2枚引く。場に「シュートスタジアム」が出ているなら、さらに2枚引く。"
	},

	trainerType: "Supporter",

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
