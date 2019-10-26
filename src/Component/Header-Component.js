import React from 'react'
import './Header-Component.scss'


let check = false;
export class Header extends React.Component {
    state = {
        size: 'up',
        scroll:'top'
    }
    
   
    MenuDown = () => {

        if (check === false) {
            this.setState({ size: 'down' })
            check = true;
        }
        else {
            this.setState({ size: 'up' })
            check = false;
        }
    }
    stringCheck = () => {
        if (this.state.size === 'down')
            return 'responsive main-points fade'
        else
            return 'main-points'
    }
    listenScrollEvent = e => {
        if (window.scrollY > 300) {
          this.setState({scroll:'bottom'})
        } else {
          this.setState({scroll: 'top'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }

      scrolling=()=>{
          if(this.state.scroll==='top')
          return 'main-header'
          else
          return 'positionSticky main-header'
      }
    render() {
        return (

            <div className={this.scrolling()}>
                <h3 className='main-title'>Softlamp</h3>

                <ul className={this.stringCheck()}>
                    <li className='point show'><a>Home</a></li>
                    <li className='point show'><a>About Us</a></li>
                    <li className='point show'><a>Portfolio</a></li>
                    <li className='point show'><a>Services</a></li>
                    <li className='point show'><a>Testimonials</a></li>
                    <li className='point show'><a>Blogs</a></li>
                    <li className='point show'><a>Contact</a></li>
                    <li className='point icon show' onClick={this.MenuDown}><a className="fa fa-bars fa-2x">
                    </a></li>
                </ul>

            </div>
        )
    }
}