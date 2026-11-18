import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "キリキザン"
	},
	rarity: "Promo",
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 90,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		625
	],
	description: {
		ja: "大勢の コマタナを 従えて 獲物を 群れで 追いつめる。 とどめは キリキザンが 刺す。"
	},
	attacks: [
		{
			name: {
				ja: "きりさく"
			},
			cost: [
				"Darkness",
				"Colorless"
			],
			damage: 30
		},
		{
			name: {
				ja: "れんぞくぎり"
			},
			effect: {
				ja: "コインを3回投げる。オモテが1回なら、10ダメージを追加。オモテが2回なら、30ダメージを追加。すべてオモテなら、60ダメージを追加。"
			},
			cost: [
				"Darkness",
				"Colorless",
				"Colorless"
			],
			damage: "30+"
		}
	],
	evolveFrom: {
		ja: "コマタナ"
	},
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		}
	],
	retreat: 1
}

export default card
