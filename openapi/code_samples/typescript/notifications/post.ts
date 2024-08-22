import { Notification, SessionEvent, TestSdk } from 'test-sdk';

(async () => {
  const testSdk = new TestSdk({
    token: 'YOUR_TOKEN',
  });

  const sessionEvent = SessionEvent.SESSIONTERMINATED;

  const notification: Notification = {
    sessionId: 'Duis sed p',
    event: sessionEvent,
  };

  const { data } = await testSdk.sessionNotificationsCallback.postNotification(input, {
    authorization: 'Authorization',
    xAuthorization: 'X-Authorization',
    xTransactionId: 'X-transaction-id',
  });

  console.log(data);
})();