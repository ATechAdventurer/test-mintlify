import { TestSdk } from 'test-sdk';

(async () => {
  const testSdk = new TestSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await testSdk.connectivity.getDeviceDetails('iccid', {
    xTransactionId: 'X-transaction-id',
  });

  console.log(data);
})();