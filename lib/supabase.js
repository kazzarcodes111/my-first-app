import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

// Your Supabase project URL and public anon key
const supabaseUrl = 'https://dntprwlnnotblnqxwhhq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRudHByd2xubm90YmxucXh3aGhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU3NTExODcsImV4cCI6MjA5MTMyNzE4N30.ZJo5NCRI028G4oPeja8tHM1d3t4RscVVOJvJTqurlZ8'

// Create the Supabase client
// AsyncStorage lets the app remember the user's login between sessions
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,   // keeps the user logged in automatically
    persistSession: true,      // saves the session to the phone's storage
    detectSessionInUrl: false, // not needed for mobile apps
  },
})
