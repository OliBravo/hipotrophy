import React from 'react';

import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Banner.css';

import background from '../../img/banner.svg';

function Banner() {
    return (
        <div className="position-relative">
            <img className='d-none d-sm-block' src={background} width='100%'></img>
            <div className="mx-auto banner-container">
                <div className="d-flex justify-content-between">
                    <Button href="#" className="flex-grow-1 banner-button banner-button-pregnancy mr-2" variant="danger">Hipotrofia w ciąży</Button>
                    <Button href="#" className="flex-grow-1 banner-button banner-button-baby ml-2" variant="primary">Hipotrofia u dzieci</Button>
                </div>
            </div>
        </div>
    )
}

export default Banner;