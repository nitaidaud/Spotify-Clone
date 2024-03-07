// TrackContext.tsx
import { Track } from '@spotify/web-api-ts-sdk';
import React, { PropsWithChildren, createContext, useState } from 'react';

interface TrackContextValue {
  track: Track | null;
  setTrack: React.Dispatch<React.SetStateAction<Track | null>>;
}

export const TrackContext = createContext<TrackContextValue>({
  track: null,
  setTrack: () => {},
});

export const TrackProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [track, setTrack] = useState<Track | null>(null);

  return (
    <TrackContext.Provider value={{ track, setTrack }}>
      {children}
    </TrackContext.Provider>
  );
};