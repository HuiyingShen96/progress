/**
 * Created by huiyingshen on 2016/10/21.
 */
let React = require("react");
let ReactDOM = require("react-dom");
let Wasabi = require("wasabiD");
let ProgressCricle = Wasabi.ProgressCricle;
var Test = React.createClass({
    getInitialState: function(){
        return {
            progress: 0,
        }
    },
    render: function(){
        return (<ProgressCricle ref="progress" radius={50} color="pink" progress={this.state.progress}></ProgressCricle>);
    },
    componentDidMount: function(){
        //在这里进行DOM操作
        //用于演示，不需要时可以去掉
        var timer = null,
            progress = this.state.progress,
            maxProgress = 80;//最大的进度值
        timer = setInterval(function(){
            if(progress>=maxProgress){
                clearInterval(timer);
                timer = null;
            }else{
                this.setState({
                    progress: ++progress,
                });
            }
        }.bind(this),10);
    }
});
ReactDOM.render(<Test />, document.getElementById("root"));
