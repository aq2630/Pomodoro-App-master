import React, { Component } from 'react';
import './main-view.scss';
import Timer from '../Timer/timer';
import Settings from '../Settings/settings';
import settings from '../../img/icon-settings.svg';

class MainView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            font: 'kumbh',
            color: '#f87070' ,
            pomodoro: 25,
            shortBreak: 5,
            longBreak:15, 
        }

        
    }
    
    //This is just changing Color as per state
    changeHover = (e) => {
        e.target.style.color = this.state.color;
    }
   //This is just changing Color back to orignal
    changeHoverBack = (e) => {
        e.target.style.color = '#EFF1FA'
    }

    applySettings = (e) => {
        e.preventDefault();

        //Setting up selected font
        if ( document.getElementById('kumbh-font').classList.contains('selected')) {
            this.setState({
                font: 'kumbh'
            })
        } else if (document.getElementById('robotos-font').classList.contains('selected')) {
            this.setState({
                font: 'roboto'
            })
        } else if ( document.getElementById('mono-font').classList.contains('selected')) {
            this.setState({
                font: 'mono'
            })
        };
           //Setting up selected  color
        if ( !document.getElementById('redcheck').classList.contains('hide')) {
            this.setState({
                color: '#f87070'
            })
        } else if (!document.getElementById('cyancheck').classList.contains('hide')) {
            this.setState({
                color: '#70f3f8'
            })
        } else if (!document.getElementById('purplecheck').classList.contains('hide')) {
            this.setState({
                color: '#d881f8'
            })
        }
        document.getElementById('modal-container').style.display = 'none';
    }

    //This is just to open model
    showSettings = () => {
        document.getElementById('modal-container').style.display = 'block';
    }
   //This is just to close model
    closeSettings = (e) => {
        e.preventDefault();
        document.getElementById('modal-container').style.display = 'none';
    }


    render() {
        const { font, color } = this.state;
        let fontStyle = {
            fontFamily: 'Kumbh Sans'
        }
        let mainColor = {
            background: 'f87070'
        }
        switch(font) {
            case 'kumbh': fontStyle = { fontFamily: 'Kumbh Sans' };
            break;
            case 'roboto': fontStyle = { fontFamily: 'Roboto Slab'};
            break;
            case 'mono': fontStyle = { fontFamily: 'Space Mono'};
            break;
            default: fontStyle = { fontFamily: 'Kumbh Sans'}
        }
        switch(color) {
            case '#f87070': mainColor = { background: '#f87070'};
            break;
            case '#70f3f8': mainColor = { background: '#70f3f8'};
            break;
            case '#d881f8': mainColor = { background: '#d881f8'};
            break;
            default: mainColor = { background: '#f87070' }
        }

        return (
            <div style={fontStyle} className="container">
                <h2 id="title">pomodoro</h2>
                <div id="menu">
                    <button style={mainColor} className="node active">pomodoro</button>
                    <button className="node">short break</button>
                    <button className="node">long break</button>
                </div>
                <Timer revert={this.changeHoverBack} hover={this.changeHover}  pomodoro={this.state.pomodoro} 
                color={color} />
                <button onClick={this.showSettings} id="open-settings">
                    <img src={settings} alt="settings-button"/>
                </button>
                <Settings 
                    applySettings={this.applySettings} 
                    closeSettings={this.closeSettings}
                    color={color} 
                    pomodoro={this.state.pomodoro}
                    shortBreak= {this.state.shortBreak}
                    longBreak ={this.state.longBreak}
                    pomoUp={()=>  this.props.setState((s)=>  { return {pomodoro: s.pomodoro+1}})}
                    pomoDown={()=>         this.props.setState((s)=>  { return {pomodoro: s.pomodoro-1}})  }
                    sbUp={()=>   this.props.setState((s)=>  { return {shortBreak: s.shortBreak+1}})}
                    sbDown={()=> this.props.setState((s)=>  { return {shortBreak: s.shortBreak-1}})}
                    lbUp={()=>  this.props.setState((s)=>  { return {longBreak: s.longBreak+1}})}
                    lbDown={()=> this.props.setState((s)=>  { return {longBreak: s.longBreak-1}})}
                    setPomodoro={(v)=> this.setState({pomodoro:v})}
                    setShortBreak={(v)=> this.setState({shortBreak:v})}
                    setLongBreak={(v)=>  this.setState({longBreak:v})}
                />
            </div>
        )
    }
}

export default MainView;