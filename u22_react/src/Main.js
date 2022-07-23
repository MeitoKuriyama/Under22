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
			isModalOpen: false,
			modalTrainInfo: "",
			modalMode: "",
			modalYn: "",
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
					<div className="train__select__btn" onClick={() => {
						let info = trainList.time + "発 " + trainList.train + " " + trainList.to;
						this.pushModalInfo(info);
						this.modalOpen();
						this.modalModeChange("");
						this.modalYnChange("");
					}} >
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

	modalOpen(){
		this.setState({isModalOpen: true});
	}
	modalClose(){
		this.setState({isModalOpen: false});
	}

	pushModalInfo(value){
		this.setState({modalTrainInfo: value});
	}

	modalModeChange(value){
		this.setState({modalMode: value});
	}

	modalYnChange(value){
		this.setState({modalYn: value});
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

		// 検索結果のテスト変数
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

		//助けを求めてる人一覧のテスト変数
		const needHelpList = [
			{
				id: 1,
				time: "11:11",
				position: 1,
			},
			{
				id: 2,
				time: "22:22",
				position: 2,
			},
			{
				id: 3,
				time: "33:33",
				position: 3,
			}
		];



		// モーダル作成
		let mdoal_btns;
		if(this.state.modalMode === ""){
			mdoal_btns = (
				<div className="modal__btns">
					<p onClick={() => {
						this.modalModeChange("help")
						this.modalYnChange("");
					}}>助ける</p>
					<p className="lineP" onClick={() => {
						this.modalModeChange("needHelp");
						this.modalYnChange("");
					}}>助けを求める</p>
					<p onClick={() => {
						this.modalClose();
						this.modalModeChange();
						this.modalYnChange("");
					}}>車両選択に戻る</p>
				</div>
			);
		}else if(this.state.modalYn === ""){
			mdoal_btns = (
				<div className="modal__btns">
					<p>確認</p>
					<div className="ynBtn">
						<p onClick={() => {this.modalYnChange(true)}}>はい！</p>
						<p onClick={() => {
							this.modalYnChange(false);
							this.modalModeChange("");
						}}>いいえ</p>
					</div>
				</div>
			);
		}else if(this.state.modalYn && this.state.modalMode == "help"){
			mdoal_btns = (
				<div className="modal__btns">
					<p>助けを求めてる人</p>
					<div modal__needHelpList>
						{needHelpList.map((needHelpList) => {
							return (
								<div className="modal__needHelpList__item">
									{needHelpList.time} {needHelpList.position}両目
								</div>
							);
						})}
					</div>
					<p className="lineMarginP" onClick={() => {
						this.modalClose();
						this.modalModeChange("");
						this.modalYnChange("");
					}}>車両選択に戻る</p>
				</div>

			);
		}else if(this.state.modalYn && this.state.modalMode == "needHelp"){
			mdoal_btns = (
				<div className="modal__messe">
					<h1>助けを求めました！</h1>
					<div className="modal__btns">

						<p onClick={() => {
							this.modalClose();
							this.modalModeChange("");
							this.modalYnChange("");
						}}>キャンセル</p>
					</div>
				</div>

			);
		}


		let modal;
		if(this.state.isModalOpen){
			modal = (
				<div className="modal">
					<div className="modal__inner">
						<h2>{this.state.modalTrainInfo} の{this.state.ridingPosition}両目に乗車しました</h2>
						{mdoal_btns}
					</div>
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