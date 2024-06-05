import React, {useState, useEffect, useContext} from 'react'
import Axios from "axios"
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { FreeMode, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { playerAdd } from '../procedure/playerAddButton';
import PlayerBanner from './PlayerBanner';
import PleaseLoginMessage from '../modal/PleaseLoginMessage';
import { AppContext } from '../App'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 승렬
import { MainTinyPlayButton as TinyPlayButton } from '../style/StyledIcons';

function MoodBanner({handleRender}) {

    const [moodplaylist, setMoodplaylist] = useState([]);
    // 플레이어 추가 베너
    const [playerBannerOn, setPlayerBannerOn] = useState(false);
    // 로그인이 필요합니다 모달 변수
    const [loginRequestVal, setLoginrRequestVal] = useState(false);

    const isSessionValid = JSON.parse(useContext(AppContext));

    useEffect(() => {
        Axios.get("/ezenmusic/moodbanner")
        .then(({data}) => {
            setMoodplaylist(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
    <>
    { playerBannerOn && <PlayerBanner playerBannerOn={playerBannerOn} setPlayerBannerOn={setPlayerBannerOn} page={"albumtrack"} /> }
    { loginRequestVal && <PleaseLoginMessage setLoginrRequestVal={setLoginrRequestVal} /> }

    <StyledMoodBanner className='banner-cover'>
        <h1 className="font-bold text-[22px] mb-[30px]">무드가 흐르는 순간 MOOD:ON</h1>
        <div className="swiper-button-next moodbanner"></div>
        <div className="swiper-button-prev moodbanner"></div>
        <Swiper
            modules={[FreeMode, Navigation]}
            spaceBetween={20} // 슬라이드 간격
            slidesPerView={5} // 한 스와이퍼에 몇장 보여줄지
            slidesPerGroup={5} // 한번 넘길때 몇장 넘어갈지
            speed={300} // 페이지 넘어가는 속도
            navigation={{ // 버튼
                nextEl: '.swiper-button-next.moodbanner',
                prevEl: '.swiper-button-prev.moodbanner',
            }}

            rewind={false}
            // centeredSlides={true}
            pagination={{ clickable: true }}
            >
            {
                moodplaylist.map((item, index) => (
                    <SwiperSlide key={index} className={`slide slide${index+1}`}>
                        <div className='relative'>
                            <StyledMoodLink to={"/detail/channel/" + item.themeplaylist_id} className='row'>
                                <div className="mb-[10px]">
                                    <img src={"/image/themeplaylist/" + item.org_cover_image} alt="" className="moodimg min-w-[175px] max-w-[175px] h-[175px] m-auto rounded-[6px]" />
                                </div>
                                <h3>{item.themeplaylist_title}</h3>
                            </StyledMoodLink>
                            <TinyPlayButton onClick={isSessionValid ? ()=>{playerAdd("mainbanner_theme", item.themeplaylist_id, handleRender, setPlayerBannerOn);} : () => setLoginrRequestVal(true)}></TinyPlayButton>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </StyledMoodBanner>
    </>
    )
}

export const StyledMoodBanner = styled.div`
    
    --swiper-navigation-size: 18px;

    width: 100%;
    margin-bottom: 60px;
    // height: 400px;
    position: relative;

    .slide{
        // border: 1px solid black;
    }

    .swiper-button-next.moodbanner{
        color: black;
        position: absolute;
        top: 20px;
        right: 10px;
        font-weight: 900 !important;
    }

    .swiper-button-prev.moodbanner{
        color: black;
        position: absolute;
        top: 20px;
        left: 94%;
        font-weight: 900 !important;
    }

    .moodimg:hover{
        filter: brightness(70%)
    }
`

export const StyledMoodLink = styled(Link)`
    // border: 1px solid red;
`

export default MoodBanner