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
    width: 400,
    paddingLeft: 50,
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
        boxSizing: 'inherit',
        left: 49
    }
}))

const Image = styled('img')(({ theme }) => ({
    width: 58,
    height: 60,
}))

const AsNavFor = props => {
    const theme = useTheme()

    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    const [selected, setSelected] = useState(false)
    const [images, setImages] = useState([
        'https://picsum.photos/200/300',
        'https://picsum.photos/id/237/200/300',
        'https://picsum.photos/seed/picsum/200/300',
        'https://picsum.photos/200/300?grayscale',
        'https://picsum.photos/200/300/?blur',
        'https://picsum.photos/id/870/200/300?grayscale&blur=2',
        'https://picsum.photos/id/238/200/300',
        'https://picsum.photos/id/239/200/300',
        'https://picsum.photos/id/240/200/300',
        'https://picsum.photos/id/240/200/300'
    ])
    return (
        <div style={{ width: 500, padding: 200 }}>
            <h2>Slider Syncing (AsNavFor)</h2>
            <h4>First Slider</h4>
            <Slider
                asNavFor={nav2}
                ref={slider => setNav1(slider)}
                beforeChange={(oldI, newI) => setSelected(newI)}
            >
                {
                    images.map((image, index) => (
                        <img key={index} src={image} width="300" height="400" />
                    ))
                }
            </Slider>
            <h4>Second Slider</h4>
            <BoxStyle>
                <Slider
                    asNavFor={nav1}
                    ref={slider => setNav2(slider)}
                    slidesToShow={5}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    centerMode={true}
                    beforeChange={(oldI, newI) => setSelected(newI)}
                >
                    {
                        images.map((image, index) => (
                            <Grid container spacing={2}>
                                <Grid item >
                                    <img key={index} src={image} style={{
                                        borderRadius: 12,
                                        border: selected == index ? '5px solid green' : '',
                                        width: '100%',
                                        height: '100%'
                                    }}
                                    />
                                </Grid>
                            </Grid>
                        ))
                    }
                </Slider>
            </BoxStyle>
        </div>
    );
}

export default AsNavFor