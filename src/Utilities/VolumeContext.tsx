import React, { PropsWithChildren, createContext, useState } from 'react';

interface VolumeContextValue {
    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
  }

export const VolumeContext = createContext<VolumeContextValue>({
    volume: 0,
    setVolume: () => {},
});

export const VolumeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [volume, setVolume] = useState<number>(0);

  return (
    <VolumeContext.Provider value={{ volume, setVolume }}>
      {children}
    </VolumeContext.Provider>
  );
};