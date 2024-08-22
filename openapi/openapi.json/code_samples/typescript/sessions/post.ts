import { AsId, CreateSession, PortsSpec, QosProfile, TestSdk, UeId } from 'test-sdk';

(async () => {
  const testSdk = new TestSdk({
    token: 'YOUR_TOKEN',
  });

  const ueId: UeId = {
    externalId: '123456789@domain.com',
    msisdn: '123456789',
    ipv4addr: '192.168.0.1/24',
    ipv6addr: '2001:db8:85a3:8d3:1319:8a2e:370:7344',
  };

  const asId: AsId = {
    ipv4addr: '192.168.0.1/24',
    ipv6addr: '2001:db8:85a3:8d3:1319:8a2e:370:7344',
  };

  const ranges: Ranges = {
    from: 15507,
    to: 5265,
  };

  const portsSpec: PortsSpec = {
    ranges: [ranges],
    ports: [7941],
  };

  const qosProfile = QosProfile.QOSE;

  const createSession: CreateSession = {
    duration: 86400,
    ueId: ueId,
    asId: asId,
    uePorts: portsSpec,
    asPorts: portsSpec,
    qos: qosProfile,
    notificationUrl: 'https://application-server.com',
    notificationAuthToken: 'c8974e592c2fa383d4a3960714',
  };

  const { data } = await testSdk.qoSSessions.createSession(input, {
    authorization: 'Authorization',
    xAuthorization: 'X-Authorization',
    xTransactionId: 'X-transaction-id',
  });

  console.log(data);
})();