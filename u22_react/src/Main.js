import React from "react";
import img from './img/train.png';



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
				value: '出発駅検索'
			},
			{
				maru: '着',
				value: '到着駅検索'
			}
		];

		// 検索結果
		const trainList = [
			{
				time: '00:00',
				to: '新宿行',
				train: '急行'
			},
			{
				time: '00:00',
				to: '新宿行',
				train: '急行'
			},
			{
				time: '00:00',
				to: '新宿行',
				train: '急行'
			},
			{
				time: '00:00',
				to: '新宿行',
				train: '急行'
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
												Array(8).fill().map(() => {
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