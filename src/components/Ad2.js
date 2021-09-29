import React, { Component  } from 'react'

class Ad2 extends Component {

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
                data-ad-client="ca-pub-4003866130264324"
                data-ad-slot="5715368364"
        ></ins>
        )
    }
}


export default Ad2