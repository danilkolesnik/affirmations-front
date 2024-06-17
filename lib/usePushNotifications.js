import { useEffect, useState } from 'react';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { supabase } from './supabase';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const usePushNotifications = (userId) => {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      if (token) {
        setExpoPushToken(token);
        saveTokenToSupabase(token);
      }
    });

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener);
      Notifications.removeNotificationSubscription(responseListener);
    };
  }, []);

  const saveTokenToSupabase = async (token) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('push_tokens')
        .upsert({ token, user_id: userId });

      if (error) {
        throw error;
      } else {
        console.log('Token saved to Supabase:', data);
      }
    } catch (error) {
      setError(error);
      console.error('Error saving token to Supabase:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return { expoPushToken, notification, isLoading, error };
};

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

export default usePushNotifications;
