from test_sdk import TestSdk, Environment
from test_sdk.models import DeviceLocationRequest

sdk = TestSdk(
    access_token="YOUR_ACCESS_TOKEN",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = DeviceLocationRequest(
    iccid="8901882024109918312",
    horizontal_precision="AREA",
    resp_time_out=30,
    max_cache_age=300
)

result = sdk.device_location.location_check(request_body=request_body)

print(result)