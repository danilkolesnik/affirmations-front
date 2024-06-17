import React from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import usePushNotifications from '../../lib/usePushNotifications';

const SubscriptionNotifyScreen = ({ userId }) => {
  const { expoPushToken, notification, isLoading, error } = usePushNotifications(userId);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Your expo push token: {expoPushToken}</Text>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        {notification && (
          <>
            <Text>Title: {notification.request.content.title}</Text>
            <Text>Body: {notification.request.content.body}</Text>
            <Text>Data: {JSON.stringify(notification.request.content.data)}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default SubscriptionNotifyScreen;
