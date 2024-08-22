from test_sdk import TestSdk, Environment
from test_sdk.models import Notification

sdk = TestSdk(
    access_token="YOUR_ACCESS_TOKEN",
    base_url=Environment.DEFAULT.value,
    timeout=10000
)

request_body = Notification(
    session_id="Duis sed p",
    event="SESSION_TERMINATED"
)

result = sdk.session_notifications_callback.post_notification(
    request_body=request_body,
    authorization="Authorization",
    x_authorization="X-Authorization",
    x_transaction_id="X-transaction-id"
)

print(result)