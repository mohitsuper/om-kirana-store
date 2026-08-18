import { createContext, useEffect, useState } from 'react';
import { GetSettings } from '../axois/axois';

export const SettingsContext = createContext(null);

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(null);

  const fetchSettings = async () => {
    try {
      const res = await GetSettings();
      setSettings(res.data);
    } catch (err) {
      console.error('Failed to load settings', err);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, refreshSettings: fetchSettings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
