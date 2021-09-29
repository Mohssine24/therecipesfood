import React, { Component  } from 'react'

class Ad3 extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <ins className = "adsbygoogle"
            style = {{
                display:"block"
            }}
            data-ad-client="ca-pub-4003866130264324"
            data-ad-slot="3445278305"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        )
    }
}


export default Ad3