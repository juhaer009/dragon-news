import React from 'react';
import swimmingImg from '../../assets/swimming.png'
import classRoomImg from '../../assets/class.png'
import playGroundImg from '../../assets/playground.png'

const QZone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='font-bold mb-3'>QZone</h2>
            <div>
                <img src={swimmingImg} alt="swimming Image" />
                <img src={classRoomImg} alt="classroom Image" />
                <img src={playGroundImg} alt="playground Image" />
            </div>
        </div>
    );
};

export default QZone;