from test_sdk import TestSdk, Environment

sdk = TestSdk(
    access_token="YOUR_ACCESS_TOKEN",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

result = sdk.qo_s_sessions.get_session(
    session_id="non q",
    authorization="Authorization",
    x_authorization="X-Authorization",
    x_transaction_id="X-transaction-id"
)

print(result)