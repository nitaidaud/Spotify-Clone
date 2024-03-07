import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { VolumeContext } from '../../Utilities/VolumeContext';

const VolumeSlider: React.FC = () => {

    const { volume, setVolume } = useContext(VolumeContext)

    const volumeChange = (ev: React.SyntheticEvent<HTMLInputElement, Event>) => {

        const value = ev.currentTarget.valueAsNumber
        
        setVolume(value / 100)
    }

    const volumeIcon: IconDefinition = volume > 0 ? faVolumeHigh : faVolumeMute

    return (
        <div className='flex justify-around items-center'>
            <FontAwesomeIcon className='hover:opacity-60                       duration-200'
                icon={volumeIcon}
                onClick={() => setVolume(volume > 0 ? 0 : 0.5)} />

            <input type="range"
                className="slider w-2/3 h-1 bg-gray-200 rounded-lg"
                value={volume * 100}
                onChange={(ev) => { volumeChange(ev) }} />

        </div>
    );
}

export default VolumeSlider
