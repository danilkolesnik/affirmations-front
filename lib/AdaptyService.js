import { adapty } from 'react-native-adapty';

class AdaptyService {
  constructor() {
    if (!AdaptyService.instance) {
      this.initialize();
      AdaptyService.instance = this;
    }

    return AdaptyService.instance;
  }

  initialize = async () => {
    try {
      await adapty.activate(process.env.EXPO_PUBLIC_ADAPTY);
    } catch (error) {
      console.error('Error initializing Adapty:', error);
    }
  };

  setCustomerUserId = async (customerId) => {
    try {
      await adapty.identify(customerId);
    } catch (error) {
      console.error('Error setting customer ID:', error);
    }
  };

  getProfile = async () => {
    try {
      return await adapty.getProfile();
    } catch (error) {
      console.error('Error fetching profile:', error);
      throw error;
    }
  };
}

const instance = new AdaptyService();
Object.freeze(instance);

export default instance;
