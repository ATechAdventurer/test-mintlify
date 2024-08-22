import { TestSdk } from 'test-sdk';

(async () => {
  const testSdk = new TestSdk({
    token: 'YOUR_TOKEN',
  });

  const { data } = await testSdk.qoSSessions.getSession('non q', {
    authorization: 'Authorization',
    xAuthorization: 'X-Authorization',
    xTransactionId: 'X-transaction-id',
  });

  console.log(data);
})();