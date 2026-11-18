import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	cameoDexIds: [16, 25, 573, 992, 1000, 1005, 1017],
	name: {
		ja: "おいわいファンファーレ",
	},

	illustrator: "Yuu Nishida",
	category: "Trainer",

	effect: {
		ja: "おたがいのプレイヤーは、自分の番ごとに1回、自分のポケモン全員のHPを、それぞれ「10」回復してよい。その場合、自分の番は終わる。",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 781842,
				tcgplayer: 587916,
			},
		},
	],

	trainerType: "Stadium",
	regulationMark: "H",
	rarity: "Promo",
};

export default card;
