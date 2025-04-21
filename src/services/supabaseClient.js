import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kxmpfompwgqeszutdmoe.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4bXBmb21wd2dxZXN6dXRkbW9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMjcxMDEsImV4cCI6MjA2MDgwMzEwMX0.qNeukUOlE_KjXTs7Vtk6AyMkmsbO0s79t11tfPESPIU';

export const supabase = createClient(supabaseUrl, supabaseKey);