import React from 'react';
import style from "../../StyleComponent/Footer.module.scss";

import { facebook_url, instra_url, linkedin_url, Logo_url } from '../../Services/Constants';


function FooterComponent() {
    return (
        <div className={`${style.containerfluid} container-fluid`}>
            <div className='container'>
            <div className={`${style.containerdiv} row`}>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 align-items-center'>
                    <ul>
                        <li>

                            <img src={Logo_url} width={135} height={135} alt="img" />

                        </li>
                        


                    </ul>
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 align-items-end'>
                    <div className={style.list_first_ul}>
                        <ul>
                            <li className={style.list_head}>
                                <span> Services</span>

                            </li>
                            <li>
                                <span> Technologies Collection</span>

                            </li>
                            <li>
                                <span>  Frontend</span>

                            </li>
                            <li>
                                <span> Backend</span>

                            </li>

                        </ul>
                        <ul>
                            <li className={style.list_head}>
                                <span>  Quick Links</span>

                            </li>
                            <li>
                                <span>  Home</span>

                            </li>
                            <li>
                                <span>  Why Us?</span>

                            </li>
                            <li>
                                <span> Technologies Rates</span>

                            </li>

                        </ul>
                        <ul>
                            <li className={style.list_head}>
                                <span> Support & Legal</span>

                            </li>
                            <li>
                                <span>  Privacy Policy</span>

                            </li>
                            <li>
                                <span> Terms & Condition</span>

                            </li>
                            <li>
                                <span>  Contact</span>

                            </li>

                        </ul>
                    </div>

                </div>
            </div>
            <div className={`${style.second_footer} row`}>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12 align-items-end'>
                        <div className={style.firts_div}>
                           
                                Xstage Private limited © 2024 Copyright, All Right Reserved
                            
                        </div>

                    </div>
                    <div className='col-md-6  d-flex align-items-center justify-content-end'>

                        <div className={style.second_div}>
                            <p>Follow us : </p>
                            <div className={style.ul_list}>
                                <ul>
                                    <li>
                                        <img src={facebook_url} width={30} height={30} alt="img" />
                                    </li>
                                    <li>
                                        <img src={instra_url} width={30} height={30} alt="img" />
                                    </li>
                                    <li>
                                        <img src={linkedin_url} width={30} height={30} alt="img" />
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        
        </div>
    )
}

export default FooterComponent