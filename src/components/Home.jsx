import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
                id="ModelS"
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Customer Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                id="Model3"
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Customer Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                id="ModelX"
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Customer Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                id="ModelY"
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Customer Order"
                rightBtnText="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                description="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                description="Solar Roof Costs Less Than a New Roofs"
                backgroundImg="solar-roof.jpg"
                leftBtnText="Shop now"
                rightBtnText="Learn more"
            />
            <Section
                title="Accessories"
                description="Solar Roof Costs Less Than a New Roofs"
                backgroundImg="accessories.jpg"
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;
    height:100vh;
    scroll-behavior:smooth;
`