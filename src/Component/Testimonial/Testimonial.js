import React from 'react'
import './Testimonial.scss'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { TestimonialArray } from './TestimonialaArray'
export const CircleButton = () => (
    <div className='button'>
        <a className='button-circle fa fa-circle-thin'></a>
    </div>
)


export class Testimonial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            Button: ''
        }
    }
    componentDidMount() {
        this.setState({ images: TestimonialArray })
    }

    render() {
        return (
            <div className='testimonial' data-aos='fade-up'>
                <h1 className='testimonial-title'>TESTIMONIAL</h1>
                <div className='testimonial-slide-show'>
                    <Slider className='slider' autoplay='2000'>

                        {this.state.images.map((article, index) => <div key={index} className='slide'>
                            <h2 className='testimonial-slide-show-title' data-aos='fade-down' >{article.title}</h2>
                            <span className='testimonial-slide-show-subtitle' data-aos='fade-down'>{article.subtitle}</span>
                        </div>)}

                    </Slider>
                </div>
            </div>
        )
    }
}