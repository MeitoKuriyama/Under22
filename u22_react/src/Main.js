import React from "react";

// 画像import
import img from './img/train.png';
import musimegane from './img/musimegane.png';
import imgRight from './img/right.png';
import imgLeft from './img/left.png';


class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isModalOpen: true,
			selectedTrain: 0,
			ridingPosition: 1,
		};
	}


	// 選択後の車両選択画面
	selectTrainId(trainList){
		let a;
		if(trainList.id == this.state.selectedTrain){
			a = (
				<>
					<div className="main__train__select">
						<img src={imgLeft} alt="" className="arrowImg" onClick={() => {
							if(this.state.ridingPosition > 1){
								this.selectRidingPosition(this.state.ridingPosition-1)
							}
						}} />
						<div className="main__train__select__main">
							<img src={img} alt="" />
							<p>{this.state.ridingPosition}両目</p>
						</div>
						<img src={imgRight} alt="" className="arrowImg" onClick={() => {
							if(this.state.ridingPosition < trainList.count){
								this.selectRidingPosition(this.state.ridingPosition+1)
							}
						}} />
					</div>
					<div className="train__select__btn">
						<p>乗車する</p>
					</div>
				</>

			);
		}
		return a;
	}

	selectTrain(id){
		this.setState({selectedTrain: id});
	}

	selectRidingPosition(num){
		this.setState({ridingPosition: num});
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
				id: 1,
				time: '10:00',
				to: '新宿行',
				train: '各駅',
				count: 8
			},
			{
				id: 2,
				time: '20:00',
				to: '札幌行',
				train: '急行',
				count: 6
			},
			{
				id: 3,
				time: '30:00',
				to: '銀河行',
				train: '999',
				count: 7
			},
			{
				id: 4,
				time: '40:00',
				to: '地獄行',
				train: '通勤',
				count: 5
			},

		];

		// モーダル作成
		let modal;
		if(this.state.isModalOpen){
			modal = (
				<div className="modal">

				</div>
			);
		}


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
							<div className="main__search_view__item" onClick={() => {
								this.selectTrain(trainList.id)
								if(this.state.selectedTrain != trainList.id){
									// ここで他の電車を選択時にRidingPositionをリセットする
									// こいつのせいでいきなり車両選択することができなくなった解決方法求
									this.selectRidingPosition(1)
								}
							}}>

								<div className="main__search_view__item__info">
									<p>{trainList.time}</p>
									<p>{trainList.to}</p>
									<p>{trainList.train}</p>
								</div>

								<div className="main__search_view__item__main">
									<div className="main__search_view__item__main__imgs">
										{
											Array(trainList.count).fill().map((value, index) => {
												if(trainList.id == this.state.selectedTrain && this.state.ridingPosition == index+1){
													return (
														<img src={img} alt="" className="ridingImg"/>
													);
												}else{
													return (
														<img src={img} alt="" onClick={() => {this.selectRidingPosition(index+1)}}/>
													);
												}



											})
										}
									</div>

									{this.selectTrainId(trainList)}

								</div>


							</div>
						);
					})}
				</div>
				{modal}
			</div>
		);
	}
}

export default Main;