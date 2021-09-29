import React, { Component  } from 'react'

class Ad1 extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
     console.log(this.props.slot)
    }

   render () {
    return(
        <ins className = "adsbygoogle"
            style = {{
                display:"block"
            }}
            data-ad-client="ca-pub-4003866130264324"
            data-ad-slot="2916641170"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        )
    }
}

export default Ad1