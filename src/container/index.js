import React , {Component} from 'react';
import moment from 'moment';
import Document from '../component/Document';
import { NotificationContainer, NotificationManager } from 'react-notifications';


class App extends Component {

    state ={usem:"", usemone:""}



    createNotification = type => () => {
        switch (type) {
          case 'info':
            NotificationManager.info('Info message');
            break;
          case 'success':
            NotificationManager.success('Success message', 'Title here');
            break;
          case 'warning':
            NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
            break;
          case 'error':
            NotificationManager.error('Error message', 'Click me!', 5000, () => {
              alert('callback');
            });
            break;
          default:
            break;
        }
      };



    handleClick = () => {
       
        var date = new Date();
        var usemv = moment(date.toISOString()).fromNow();

        var audio = new Audio('https://raw.githubusercontent.com/janakhpon/momentnoti/master/src/assets/noti/quite-impressed.mp3');
         audio.play();
        
        this.setState({
            usem:usemv
        })

        console.log(date.toISOString())



    }


    handleClickOne = () => {
       
        var usemonev = moment('2019-01-09T10:32:56.826Z').fromNow();

        
        this.setState({
            usemone:usemonev
        })





    }



    render(){

        return(


            
            <Document title="Home | React notifications" className="page-home">
            <div className="ui container">
            

              <button className="btn btn-info " onClick={this.createNotification('info')}>
                Info
              </button>
              <hr/>
              <button className="btn btn-success" onClick={this.createNotification('success')}>
                Success
              </button>
              <hr/>
              <button className="btn btn-warning" onClick={this.createNotification('warning')}>
                Warning
              </button>
              <hr/>
              <button className="btn btn-danger" onClick={this.createNotification('error')}>
                Error
              </button>

              <button className="btn btn-success" onClick={this.handleClick}>start</button>
                <div className="ui content">
                    <p>{this.state.usem}</p> 
                </div>


                <button  className="btn btn-success" onClick={this.handleClickOne}>start</button>
                <div className="ui content">
                    <p>{this.state.usemone}</p> 
                </div>

    
              <NotificationContainer/>
            </div>
            </Document>

        );
    }
}

export default App;
