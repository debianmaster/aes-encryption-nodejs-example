# aes-encryption-nodejs-example
```
curl -X POST http://localhost:8080/encrypt \
-H "Content-Type: application/json" \
-d '{
    "data": "Hello, world!",
    "key": "603deb1015ca71be2b73aef0857d77811f352c073b6108d72a2b85e3b0f63709",
    "iv": "000102030405060708090a0b0c0d0e0f"
}'

```

```
curl -X POST http://localhost:8080/decrypt \
-H "Content-Type: application/json" \
-d '{
    "encrypted_data": "<your_encrypted_string_here>",
    "key": "603deb1015ca71be2b73aef0857d77811f352c073b6108d72a2b85e3b0f63709",
    "iv": "000102030405060708090a0b0c0d0e0f"
}'

```