import { useState, useEffect } from 'react';
import AdaptyService from './AdaptyService';
import { adapty } from 'react-native-adapty';
import {createPaywallView} from '@adapty/react-native-ui';

const useSubscription = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const initializeUser = async (customerId) => {
    try {
      await AdaptyService.setCustomerUserId(customerId);
      const profile = await AdaptyService.getProfile();
      setSubscriptionStatus(profile.accessLevels);
    } catch (error) {
      console.error('Error initializing user:', error);
      setError(error);
    }
  };

  const handleSubscription = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const paywall = await adapty.getPaywall(process.env.EXPO_PUBLIC_PAYWALL, 'en');
      const view = await createPaywallView(paywall);

      view.registerEventHandlers({
        onPurchase: async (purchase) => {
          console.log('Purchase successful:', purchase);
          await initializeUser();
        },
        onClose: () => {
          console.log('Paywall closed');
        },
        onError: (error) => {
          console.error('Error:', error);
          setError(error);
        },
      });

      await view.present();
    } catch (error) {
      console.error('Error handling subscription:', error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubscription, initializeUser, isLoading, error, subscriptionStatus };
};

export default useSubscription;
