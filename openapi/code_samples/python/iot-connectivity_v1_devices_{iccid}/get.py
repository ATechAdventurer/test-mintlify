from test_sdk import TestSdk, Environment

sdk = TestSdk(
    access_token="YOUR_ACCESS_TOKEN",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

result = sdk.connectivity.get_device_details(
    iccid="iccid",
    x_transaction_id="X-transaction-id"
)

print(result)