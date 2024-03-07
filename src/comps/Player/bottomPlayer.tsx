import { faBackwardStep, faForwardStep, faPause, faPlay, faRepeat, faShuffle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import VolumeSlider from './volumeSlider'
import { useContext, useEffect, useRef, useState } from 'react';
import { TrackContext } from '../../Utilities/TrackContext';
import { VolumeContext } from '../../Utilities/VolumeContext';

export default function BottomPlayer() {

    const audioRef = useRef<HTMLAudioElement>(null)

    const durationRef = useRef<HTMLInputElement>(null)

    const { track } = useContext(TrackContext)

    const [isPlaying, setIsPlaying] = useState<boolean>();

    const [duration, setDuration] = useState(0);

    const [loop, setLoop] = useState(false);

    const { volume, setVolume } = useContext(VolumeContext)

    let intervalId: NodeJS.Timeout

    const durationChange = () => {
        if (durationRef.current && track) {
            if (durationRef.current.valueAsNumber >= track?.duration_ms) {
                clearInterval(intervalId)
                setIsPlaying(false)
            }
            durationRef.current.valueAsNumber += 1
        }
    }

    if (track?.preview_url && isPlaying) {
        intervalId = setInterval(durationChange, 1)
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    return (
        <div className='fixed lg:bottom-0 bottom-10 self-center w-full h-16 bg-transparent bg-opacity-50 backdrop-blur-xl flex gap-x-16'>
            <div>

            </div>
            <div className='flex flex-col justify-center items-center gap-x-16 m-auto w-full'>
                <div className='flex justify-center items-center gap-x-16 m-auto'>
                    {track && track.preview_url && <audio src={track.preview_url} ref={audioRef}
                        loop={loop}
                    />}
                    {/* TODO: put icons in it own comp */}
                    <FontAwesomeIcon className='hover:opacity-60 duration-200' icon={faShuffle} />

                    <FontAwesomeIcon className='hover:opacity-60 duration-200' icon={faBackwardStep} />

                    <FontAwesomeIcon className='hover:opacity-60 duration-200' icon={isPlaying ? faPause : faPlay} onClick={() => {
                        {
                            {
                                audioRef.current &&

                                    setDuration(audioRef.current.duration * 500)

                                {
                                    audioRef.current && setVolume(audioRef.current.volume)

                                }

                                {
                                    !isPlaying && audioRef.current?.play()
                                }


                                {
                                    isPlaying && audioRef.current?.pause() &&
                                        clearInterval(intervalId)
                                }

                                if (isPlaying && audioRef.current) {
                                    audioRef.current.volume = volume;
                                    console.log(audioRef.current.volume);

                                }

                                setIsPlaying(!isPlaying)
                            }
                        }
                    }} />

                    <FontAwesomeIcon className='hover:opacity-60 duration-200' icon={faForwardStep} />

                    <FontAwesomeIcon className={`hover:opacity-60 duration-200 ${loop ? "text-green-500" : ""}`} icon={faRepeat}
                        onClick={() => setLoop(!loop)} />

                </div>
                <div className='w-2/3'>
                    <input type="range"
                        ref={durationRef}
                        defaultValue={0}
                        max={duration}
                        className='play-timer w-2/3 h-0.5 bg-gray-200 rounded-lg  cursor-pointer' /> 0:{(duration / 500).toFixed()}
                </div>
            </div>
            <div className={`absolute flex items-center justify-start right-6 self-center w-1/5 ${track?.preview_url ? "enabled:" : "disabled:"}`}>
                <VolumeSlider />
            </div>
        </div>
    )
}
