from test_sdk import TestSdk, Environment
from test_sdk.models import CreateSession

sdk = TestSdk(
    access_token="YOUR_ACCESS_TOKEN",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = CreateSession(
    duration=86400,
    ue_id={
        "external_id": "123456789@domain.com",
        "msisdn": "123456789",
        "ipv4addr": "192.168.0.1/24",
        "ipv6addr": "2001:db8:85a3:8d3:1319:8a2e:370:7344"
    },
    as_id={
        "ipv4addr": "192.168.0.1/24",
        "ipv6addr": "2001:db8:85a3:8d3:1319:8a2e:370:7344"
    },
    ue_ports={
        "ranges": [
            {
                "from_": 15507,
                "to": 5265
            }
        ],
        "ports": [
            7941
        ]
    },
    as_ports={
        "ranges": [
            {
                "from_": 15507,
                "to": 5265
            }
        ],
        "ports": [
            7941
        ]
    },
    qos="QOS_E",
    notification_url="https://application-server.com",
    notification_auth_token="c8974e592c2fa383d4a3960714"
)

result = sdk.qo_s_sessions.create_session(
    request_body=request_body,
    authorization="Authorization",
    x_authorization="X-Authorization",
    x_transaction_id="X-transaction-id"
)

print(result)