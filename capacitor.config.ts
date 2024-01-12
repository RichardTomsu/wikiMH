import { CapacitorConfig } from '@capacitor/cli';


const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'weatherApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    SplashScreen:{
      launchAutoHide: false,
      backgroundColor: "#6b6b6b"
    }
  }
};

export default config;
