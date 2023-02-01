# Gyani Chrome Extension
Chrome extension to search answers for one liner questions. This uses [Gyani API](https://github.com/koushikchoudhury0/gyani-api) (Powered by ChatGPT) behind the scenes.

### How to Use
 - Since this uses [Gyani API](https://github.com/koushikchoudhury0/gyani-api), you'll first need to set it up by:
   - Signing up to OpenAI.
   - getting the Access Token.
 - Gyani API requires a static token to authorize the requests, which you need to place into the variable `GYANI_API_STATIC_TOKEN` of file `src/get-answer.js`.
 - To reach Gyani API, you'll need to place the BASE URL into `GYANI_API_BASE_URL` variable of `src/get-answer.js`.

### Test the extension locally
As of 1st Feb 2023, follow the instructions [here](https://support.google.com/chrome/a/answer/2714278?hl=en#:~:text=Step%202%3A%20Test%20the%20app%20or%20extension).
