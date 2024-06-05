import React from 'react'
import styled from 'styled-components'

const AlreadyHaveVoucher = ({setModalOpen, setKeepGoing}) => {
    const closeModal = () =>{
        setModalOpen(false);
    }
    const cancel = () =>{
        setKeepGoing(false);
        closeModal();
    }
    const buy = () =>{
        setKeepGoing(true);
        closeModal();
    }
    return (
        <StyledInnerModal>
            <div className='inner-modal-box'>
                <p>
                    이미 사용중인 이용권이 존재합니다.<br/>
                    계속해서 진행하려면 확인 버튼 클릭 후 결제해주세요!<br />
                </p>
                <p className='inner-text'>
                    새로운 이용권은 사용대기함에 넣어둘게요
                </p>
                <div className='button-box'>
                    <button type='button' className='cancel' onClick={() => cancel()}>
                        취소
                    </button>
                    <button type='button' className='buy' onClick={() => buy()}>
                        확인
                    </button>
                </div>
            </div>
        </StyledInnerModal>
    )
}

export default AlreadyHaveVoucher

const StyledInnerModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999999999999999;
    background-color: rgba(0,0,0,0.6);
    .inner-modal-box{
        position: fixed;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 450px;
        height: 200px;
        border-radius: 5px;
        background-color: var(--main-background-white);
        color: var(--main-text-black);
        opacity: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        p{
            font-size: 15px;
            line-height: 1.47;
            color: #484848;
            text-align: center;
        }
        .inner-text{
            margin-top: 10px;
            margin-bottom: 28px;
            font-size: 15px;
            color: #3c3c3c;
        }
        .button-box{
            width: 60%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            button.buy{
                width: 85px;
                height: 36px;
                padding: 0 15px;
                font-size: 14px;
                line-height: 36px;
                color: #fff;
                text-align: center;
                background-color: #3f3fff;
                &:hover{
                    opacity: 0.9;
                }
            }
            button.cancel{
                width: 85px;
                height: 36px;
                padding: 0 15px;
                font-size: 14px;
                line-height: 36px;
                color: #fff;
                text-align: center;
                background-color: var(--main-text-gray);
                margin-right: 30px;
                &:hover{
                    opacity: 0.9;
                }
            }
        }
    }
`;