import React from "react";
import defaultDataset from "./dataset";
import './assets/styles/style.css'
import { AnswersList, Chats } from "./components";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
      chats: [],
      currentId: "init",
      dataset: defaultDataset,
      open: false
    };
  }

  displayNextQuestion = (nextQuestionId) =>{
    const chats = this.state.chats
    chats.push({
      text: this.state.dataset[nextQuestionId].question,
      type: 'question'
    })

    this.setState({
      answers: this.state.dataset[nextQuestionId].answers,
      chats:chats,
      currentId: nextQuestionId
    })
  }

  selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch (true) {
      case (nextQuestionId === 'init'):
        break;
      default:
        const chat = {
          text: selectedAnswer,
          type: 'answer'
        }

        const chats = this.state.chats;  //現在のchatsの状態を取得
        chats.push(chat)                 //連想配列をPush

        this.setState({
          chats: chats
        })
        break;
    }
  }

  // Answersの初期設定
  initAnswer = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const initAnswers = initDataset.answers;

    this.setState({
      answers: initAnswers
    })
  }

  initChats = () => {
    const initDataset = this.state.dataset[this.state.currentId];
    const chat = {
      text: initDataset.question,
      type: 'question'
    }

    const chats = this.state.chats;  //現在のchatsの状態を取得
    chats.push(chat)                 //連想配列をPush

    this.setState({
      chats: chats
    })
  }

  componentDidMount() {
    this.initChats();  // chatsの呼び出し
    this.initAnswer()
  }

  render() {
    return (
      <section className="c-section">
        <div className="c-box">
          <Chats chats={this.state.chats} />
          <AnswersList answers={this.state.answers} />
        </div>
      </section>
    );
  }
}
