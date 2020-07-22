import React from 'react'
import CondRenderComponent from './CondRenderComponent.js'

class CondRenderContainer extends React.Component {
  state = {
    count: 0,
    linkArr: [
      'https://i.pinimg.com/originals/17/9a/e8/179ae805accd4247dd9b909a8be9a55f.jpg',
      'https://www.inkedmag.com/.image/t_share/MTU5MDMyMDQzODI2NTIxODgw/kali-11.png',
      'https://celeb.gate.cc/media/cache/image/upload/k/a/kali-roses-nude-292816.jpeg',
      'https://static-ca-cdn.eporner.com/photos/328450.jpg',
      'https://static-ca-cdn.eporner.com/photos/719652.jpg',
      'https://static-ca-cdn.eporner.com/photos/757820.jpg',
      'https://fappeningbook.com/photos/k/a/kali-roses/1000/16.jpg',
      'https://myteenwebcam.com/fapp/jpgs/8f9a3b7fa2c7ff01bb979dece71079e0.jpg'
    ],
    decorationArr: [
      '#ff0000',
      '#fc5e03',
      '#ffff00',
      '#00ff00',
      '#00fff7',
      '#245eff',
      '#aa00ff',
      '#ff00aa'
    ]
  }

  componentDidMount = () => {
    setInterval( () => {
      this.setState(prevState => {
        if (this.state.count < prevState.linkArr.length - 1) {
          return {
            count: prevState.count + 1
          }
        } else {
          return {
            count: 0
          }
        }
      })
    }, 4000 )
    window.scrollTo(0, 1400)
  }

  render () {
    return (
      <CondRenderComponent 
        imageSrc={ this.state.linkArr[ this.state.count ] }
        decoration={ this.state.decorationArr[ this.state.count ] }
      />
    )
  }

}

export default CondRenderContainer