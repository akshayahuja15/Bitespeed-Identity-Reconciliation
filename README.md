# Bitespeed Backend Task: Identity Reconciliation

## Endpoint
- **POST /identify**
  - URL: `https://bitespeed-task.onrender.com/identify`
  - Request Body (JSON):
    ```json
    {
        "email": "example@example.com",
        "phoneNumber": "123456"
    }
    ```
  - Response:
    ```json
    {
        "contact": {
            "primaryContatctId": 1,
            "emails": ["email1@example.com", "email2@example.com"],
            "phoneNumbers": ["123456", "789012"],
            "secondaryContactIds": [2, 3]
        }
    }
    ```

## How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/bitespeed-task.git



npm install

npm start
