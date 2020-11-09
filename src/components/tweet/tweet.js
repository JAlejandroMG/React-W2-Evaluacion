import React from 'react';
import Interaction from './interaction/interaction';
import './styles.css';
// import Icon from '../icon/icon';

class Tweet extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        interactionsArray: [ 
          this.props.likes,
          this.props.comments, 
          this.props.retweets
        ]
    }
}

    render(){
        return (
            <div className="tweet-container">
                <div className="row a1">
                    <div className="c1">
                        <img src={this.props.profileUrl} alt="profile" />
                    </div>
                    <div className="c2">
                        <h6>{this.props.profile}</h6>
                        <h6>{this.props.username}</h6>
                    </div>
                    <div className="c3"></div>
                </div>
                <div className="row a2">
                    <p className="content">                
                        {this.props.content}
                    </p>
                </div>
                <div className="row-interactions a3">
                  {
                      this.props.iconList.map( (icon, index) => {
                          return (
                            // <Icon source={icon} />
                            <Interaction source={icon} interaction={this.state.interactionsArray[index]} />
                          )
                      })
                  }
                </div>
            </div>
        )
    }
}

export default Tweet;

/* {
  props.iconList.map( icon => {
      return (
          <Icon source={icon} />
      )
  })
} */