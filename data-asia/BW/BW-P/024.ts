import { Card } from "../../../interfaces"
import Set from "../BW-P"

const card: Card = {
	set: Set,
	name: {
		ja: "ゾロアーク"
	},
	rarity: "Promo",
	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 100,
	types: [
		"Darkness"
	],
	stage: "Stage1",
	dexId: [
		571
	],
	description: {
		ja: "相手を 化かす ことで 群れの 安全を 守ってきた ポケモン。 仲間同士の 結束が 固い。"
	},
	attacks: [
		{
			name: {
				ja: "おしおき"
			},
			effect: {
				ja: "相手のバトルポケモンが2進化なら、20ダメージを追加。"
			},
			cost: [
				"Colorless"
			],
			damage: "20+"
		},
		{
			name: {
				ja: "バークアウト"
			},
			effect: {
				ja: "次の相手の番、このワザを受けた相手のバトルポケモンが使うワザのダメージは「-20」される。"
			},
			cost: [
				"Darkness",
				"Darkness",
				"Colorless"
			],
			damage: 60
		}
	],
	evolveFrom: {
		ja: "ゾロア"
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
