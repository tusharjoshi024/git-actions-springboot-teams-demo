import React from 'react'
import Tab from './components/Tab'

const ons = require('onsenui')
const Ons = require('react-onsenui')

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0,
        }
    }
    
    renderToolbar = () => {
        const titles = ['Home', 'Settings']
        return (
            <Ons.Toolbar>
                <div className="center">{titles[this.state.index]}</div>
            </Ons.Toolbar>
        )
    }
    renderPage = (route, navigator) => {
        console.log(route,navigator)
        return (
            <Ons.Page key={route.title} renderToolbar={this.renderHomeToolbar.bind(this, route, navigator)}>
                {route.initial &&
                <section style={{margin: '16px', textAlign: 'center'}}>
                    <Ons.Card onClick={() => navigator.pushPage({title: `Person Search`, hasBackButton: true})}>Person Search</Ons.Card>
                    <Ons.Card onClick={() => navigator.pushPage({title: `Vehicle Search`, hasBackButton: true})}>Vehicle Search</Ons.Card>
                    <Ons.Card onClick={() => navigator.pushPage({title: `Map Search`, hasBackButton: true})}>Map Search</Ons.Card>
                    <Ons.Card onClick={() => navigator.pushPage({title: `Incident Report`, hasBackButton: true})}>Incident Report</Ons.Card>
                </section>}
                {route.title === 'Person Search' &&
                <section>test</section>
                }
            </Ons.Page>
        )
    }
    renderHomeToolbar = (route, navigator) => {
        const backButton = route.hasBackButton && <Ons.BackButton onClick={() => navigator.popPage()}>Back</Ons.BackButton>
        
        return (
            <Ons.Toolbar>
                <div className="left">{backButton}</div>
                <div className="center">{route.title}</div>
            </Ons.Toolbar>
        )
    }
    renderTabs = () => {
        return [
            {
                content: <Ons.Navigator
                    swipeable
                    renderPage={this.renderPage}
                    initialRoute={{
                        initial: true,
                        title: 'Tools',
                        hasBackButton: false,
                    }}
                />,
                tab: <Ons.Tab label="Home" icon="md-home"/>,
            },
            {
                content: <Tab content="Change the settings"/>,
                tab: <Ons.Tab label="Settings" icon="md-settings"/>,
            },
        ]
    }
    
    render = () => {
        return (
            <Ons.Page renderToolbar={this.renderToolbar}>
                <Ons.Tabbar
                    swipeable={true}
                    position={'auto'}
                    index={this.state.index}
                    onPreChange={(event) => {(event.index !== this.state.index) && this.setState({index: event.index})}}
                    renderTabs={this.renderTabs}
                />
            </Ons.Page>
        )
    }
}

export default App
