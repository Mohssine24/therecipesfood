import React, { Component  } from 'react'

class Ad320x50 extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <ins className = "adsbygoogle"
                style = {{
                    display: 'inline-block',
                    width: '400px',
                    height: '70px'
                }}
                data-ad-client="ca-pub-7368749873625601"
                data-ad-slot={this.props.slot}
        ></ins>
        )
    }
}


export default Ad320x50