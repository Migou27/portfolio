import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from './supabaseClient.js';

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/mobile/i.test(ua)) return 'mobile';
  if (/tablet/i.test(ua)) return 'tablet';
  return 'desktop';
};

const LogTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const logVisit = async () => {
      const log = {
        timestamp: new Date().toISOString(),
        device: getDeviceType(),
        page: location.pathname,
        language: navigator.language,
      };

      const { error } = await supabase.from('Logs').insert([log]);
      if (error) console.error('Erreur enregistrement log:', error);
    };

    logVisit();
  }, [location.pathname]);

  return null;
};

export default LogTracker;
