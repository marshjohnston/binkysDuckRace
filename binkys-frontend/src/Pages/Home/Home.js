import React, { Component } from "react"
import { startButtons, DiscoverySection } from './components'
import './Home.css'

class Home extends Component {
    
    componentDidMount() { 
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="Home">
                <Header />
                <DiscoverySection />
                <CityGuidesSection />
                <QuotesSection />
                <Subscriptions />
            </div>
        );
    }
}


export default Home