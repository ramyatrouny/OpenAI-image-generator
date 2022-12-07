# OpenAI Image Generator

A Node.js Express application for generating images using OpenAI's GPT-3 model.

## Requirements

- Node.js v12.0 or higher
- npm v6.0 or higher
- OpenAI API key

## Installation

1. Clone this repository: `git clone https://github.com/ramyatrouny/openAI-image-generator`
2. Navigate to the cloned directory: `cd openAI-image-generator`
3. Install dependencies: `npm install`
4. Create a file called `.env` and add your OpenAI API key to it in the following format: `OPENAI_API_KEY=[YOUR_API_KEY]`
5. Start the server: `npm start`

## Usage

To generate an image, make a POST request to the `openai/image` endpoint with the desired image prompt in the request body. The server will return a JSON object containing the generated image.

Example:

```
curl -X POST \
  http://localhost:3000/generate \
  -H 'Content-Type: application/json' \
  -d '{
  "prompt": "A beautiful sunset over a lake",
  "size": "medium"
}'
```

The response will be a JSON object like the following:

```
{
    "success": true,
    "data": "https://oaidalleapiprodscus.blob.core.windows.net/private/org-AeqKACJ0pkStTgufyZDU7TZU/user-YIY5cghm2QXQjgV1Xpju78In/img-hRjaqoX8aefiqq97z0vW5pVy.png?st=2022-12-07T08%3A30%3A01Z&se=2022-12-07T10%3A30%3A01Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2022-12-07T07%3A23%3A54Z&ske=2022-12-08T07%3A23%3A54Z&sks=b&skv=2021-08-06&sig=jVgpwM3ykQOS75BftkZ6P4ICJ8pI8d0HCBvNXkeKtDw%3D"
}
```



