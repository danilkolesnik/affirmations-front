import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, Pressable } from 'react-native';
import useSubscription from '../../lib/useSubscription';

const SubscriptionScreen = ({ customerId }) => {
  const { handleSubscription, initializeUser, isLoading, error, subscriptionStatus } = useSubscription();

  useEffect(() => {
    initializeUser(customerId);
  }, [customerId]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Pressable
          style={{ backgroundColor: "#000", height: 50, borderRadius: 15 }}
          title="Зарегистрироваться"
          onPress={handleSubscription}
          disabled={isLoading}
        >
          <Text
            style={{
              color: "#FFF",
              textAlign: "center",
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 51,
            }}
          >
            Subscribe
          </Text>
        </Pressable>
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={{ color: 'red' }}>{error.message}</Text>}
      {subscriptionStatus && (
        <Text style={{ marginTop: 20 }}>
          {subscriptionStatus.isActive ? 'Subscription is active' : 'No active subscription'}
        </Text>
      )}
    </View>
  );
};

export default SubscriptionScreen;
