import os
from together import Together

# Initialize the Together client with your API key
client = Together(api_key="APIKEY")

# Upload the file
file_resp = client.files.upload(file="train.jsonl", check=True)

# Print the response
print(file_resp.model_dump())
