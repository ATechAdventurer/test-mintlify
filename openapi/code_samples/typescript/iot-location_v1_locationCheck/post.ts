import { DeviceLocationRequest, TestSdk } from 'test-sdk';

(async () => {
  const testSdk = new TestSdk({
    token: 'YOUR_TOKEN',
  });

  const horizontalPrecision = HorizontalPrecision.AREA;

  const deviceLocationRequest: DeviceLocationRequest = {
    iccid: '8901882024109918312',
    horizontalPrecision: horizontalPrecision,
    respTimeOut: 30,
    maxCacheAge: 300,
  };

  const { data } = await testSdk.deviceLocation.locationCheck(input);

  console.log(data);
})();