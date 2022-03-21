import React, { Component, useEffect, useState } from "react";

// material ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { styled, useTheme } from '@mui/material/styles';

const BoxStyle = styled(Box)(({ theme }) => ({
    maxWidth: 347,
    margin: '24px auto',
    position: 'relative',
    '&:after': {
        top: 0,
        zIndex: 9,
        content: '""',
        height: '100%',
        position: 'absolute',
        width: 42.6667,
        backgroundImage: 'linear-gradient(to left, rgba(33, 43, 54, 0) 0%, rgb(33, 43, 54) 100%)',
        boxSizing: 'inherit',
        right: 0,
        transform: 'scaleX(-1)'
    },
    '&:before': {
        top: 0,
        zIndex: 9,
        content: '""',
        height: '100%',
        position: 'absolute',
        width: 42.6667,
        backgroundImage: 'linear-gradient(to left, rgba(33, 43, 54, 0) 0%, rgb(33, 43, 54) 100%)',
        left: 0,
    }
}))

const Image = styled('img')(({ theme, selected, index }) => ({
    borderRadius: 12,
    width: selected == index ? 56: 64,
    height: selected == index ? 56: 64,
    border: selected == index ? '4px solid green' : ''
}))

const AsNavFor = props => {
    const theme = useTheme()

    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    const [selected, setSelected] = useState(false)
    const [images, setImages] = useState([
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/200/300',
        'https://picsum.photos/id/238/200/300',
        'https://picsum.photos/id/239/200/300',
        'https://picsum.photos/id/240/200/300',
        'https://picsum.photos/id/240/200/300',
        'https://picsum.photos/id/238/200/300',
        'https://picsum.photos/id/239/200/300',
        'https://picsum.photos/id/240/200/300',
        'https://picsum.photos/id/240/200/300'
    ])
    return (
        <div>
            <h2>Slider Syncing (AsNavFor)</h2>
            <h4>First Slider</h4>
            <Slider
                asNavFor={nav2}
                ref={slider => setNav1(slider)}
                beforeChange={(oldI, newI) => setSelected(newI)}
            >
                {
                    images.map((image, index) => (
                        <img key={index} src={image}/>
                    ))
                }
            </Slider>
            <h4>Second Slider</h4>
            <BoxStyle>
                <Slider
                    asNavFor={nav1}
                    ref={slider => setNav2(slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    beforeChange={(oldI, newI) => setSelected(newI)}
                >
                    {
                        images.map((image, index) => (
                            <Box style={{
                                width: '100%',
                                display: 'inline-block'
                            }}>
                                <Box component="span" style={{
                                    lineHeight: 0,
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: 64,
                                    height: 64,
                                    borderRadius: 12,
                                    cursor: 'pointer',
                                    border: '3px solid primary'
                                }}>
                                    <Image src={image} index={index} selected={selected}/>
                                </Box>
                            </Box>
                        ))
                    }
                </Slider>
            </BoxStyle>
        </div>
    );
}

export default AsNavFor