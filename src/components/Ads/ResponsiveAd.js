import React, { Component  } from 'react'

class ResponsiveAd extends Component {

    componentDidMount() {
     (window.adsbygoogle = window.adsbygoogle || []).push({})
    }

   render () {
    return(
        <ins className = "adsbygoogle"
            style = { {display:"inline-block", width: '100%'} }
            data-ad-client="ca-pub-7368749873625601"
            data-ad-slot={this.props.slot}
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        )
    }
}


export default ResponsiveAd