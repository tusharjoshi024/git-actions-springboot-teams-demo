import React from 'react'

const Ons = require('react-onsenui')

const Tab = (props) => {
    return (
        <Ons.Page>
            <section style={{margin: '16px'}}>
                    {props.content}.
                
            </section>
            <section>
                {props.body}
            </section>
        </Ons.Page>
    )
}
export default Tab
