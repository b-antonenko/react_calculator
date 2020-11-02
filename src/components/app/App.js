import Result from '../result/result';
import React from 'react'
import Numbers from '../numbers/numbers'
import Symbols from '../symbols/symbols';
import './app.css';

class App extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            result: '0',
            currentNum: '',
            formula: []
        };

        this.onClickNum = this.onClickNum.bind(this);
        this.onClickSym = this.onClickSym.bind(this);
        this.countRes = this.countRes.bind(this);
    }

    onClickNum(value) {
        let fullNum = this.state.currentNum + value;
        this.setState({
            result: fullNum
        });
        this.setState({
            currentNum: fullNum
        });
    }

    onClickSym (value) {
        let newFormula = [...this.state.formula];
        if (this.state.formula === "") {
            newFormula.push(this.state.result)
        } else
            newFormula.push(this.state.currentNum);
            newFormula.push(value);
            console.log(newFormula);
            this.setState({
                formula: newFormula,
                currentNum: ''
            });
    };

    async countRes () {
        let newFormula = await [...this.state.formula];
        await newFormula.push(this.state.currentNum);
        await this.setState({
            formula: newFormula
        });
        let res = await eval(this.state.formula.join(' '));
        await console.log(res);
        await this.setState({
            result : res,
            currentNum: res,
            formula: ''
      });
    };

    clear = () => {
      this.setState({
          result: 0,
          currentNum: '',
          temporaryRes: '',
          formula: ''
      })
    };

  render () {
      return (
          <div className="app">
              <div className='calc-body shadow-lg'>
                  <div className="align-items-start result rounded-top">
                      <div className="col">
                          <Result res={this.state.result}/>
                      </div>
                  </div>
              <div>
                  <div>
                      <Numbers
                               onClickNum={this.onClickNum}
                               clear={this.clear}
                      />

                  </div>
                  <div>
                      <Symbols onClickSym={this.onClickSym}
                               countRes={this.countRes}
                               />
                  </div>
                  </div>
              </div>
          </div>
      )
  }
}

export default App;
