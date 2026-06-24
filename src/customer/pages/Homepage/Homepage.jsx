
import React from 'react'
import Maincarousel from '../../components/Homecarousel/Maincarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const Homepage = () => {
    return (
        <div>
            <Maincarousel/>
            <div className='space-y-10 py-20 flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
                <HomeSectionCarousel />
            </div>
        </div>
    )
}
export default Homepage;