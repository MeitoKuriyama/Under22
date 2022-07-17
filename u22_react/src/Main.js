import React from "react";
import img from './img/train.png';
import musimegane from './img/musimegane.png';



class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {

		// 検索欄
		const searchList = [
			{
				maru: '発',
				value: '出発駅検索',
				img: {musimegane}
			},
			{
				maru: '着',
				value: '到着駅検索',
				img: {musimegane}
			}
		];

		// 検索結果		countがあふれちゃうの直す
		const trainList = [
			{
				time: '10:00',
				to: '新宿行',
				train: '各駅',
				count: 8
			},
			{
				time: '20:00',
				to: '札幌行',
				train: '急行',
				count: 6
			},
			{
				time: '30:00',
				to: '銀河行',
				train: '999',
				count: 7
			},
			{
				time: '40:00',
				to: '地獄行',
				train: '通勤',
				count: 5
			},

		]

		return(
			<div className="main">

				{/* 検索欄 */}
				<div className="main__search">
					{searchList.map((searchList) => {
						return (
							<div className="main__search__staition">
								<div className="main__search__staition__hatu">
									<p>{searchList.maru}</p>
								</div>

								<input type="text" placeholder={searchList.value}></input>

								{/* ここにオンクリックを追加する */}
								{/* オンクリックで候補駅をよみこんで表示　ワイは配列の文字表示だけやる。 */}
								<div className="main__search__staition__musimegane">
									<img src={musimegane} />
								</div>
							</div>
						);
					})}
				</div>

				{/* 検索結果 */}
				<div className="main__search_view">
					{trainList.map((trainList) => {
						return (
							<>
								<div className="main__search_view__item">
									<div className="main__search_view__item__info">
										<p>{trainList.time}</p>
										<p>{trainList.to}</p>
										<p>{trainList.train}</p>
									</div>

									<div className="main__search_view__item__main">
										<div className="main__search_view__item__main__imgs">
											{
												Array(trainList.count).fill().map(() => {
													return (
														<img src={img} alt="" />
													);
												})
											}
										</div>
									</div>
								</div>
							</>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Main;