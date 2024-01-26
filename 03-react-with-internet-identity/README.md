# Descentralize React APP with Internet Identity example

## How to use

Duplicate the `frontend/.env-example` file in the same directory and rename it to `.env`.

Execute the following commands:

```bash
npm install
dfx start --background
dfx canister create --all
```

After that, you should see an output like this:

```bash
Creating canister courses...
courses canister created with canister id: bkyz2-fmaaa-aaaaa-qaaaq-cai
Creating canister frontend...
frontend canister created with canister id: bd3sg-teaaa-aaaaa-qaaba-cai
Creating canister internet-identity...
internet-identity canister created with canister id: be2us-64aaa-aaaaa-qaabq-cai
Creating canister users...
users canister created with canister id: br5f7-7uaaa-aaaaa-qaaca-cai
```

From this you can assign values to `NEXT_PUBLIC_COURSES_CANISTER_ID` and `NEXT_PUBLIC_USERS_CANISTER_ID` in the `.env` file.

Then, you have to execute this:

```bash
dfx deploy internet-identity
```

And you shoud see an output like this:

```bash
URLs:
  Frontend canister via browser
    frontend: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai
    internet-identity: http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai
  Backend canister via Candid interface:
    courses: http://127.0.0.1:4943/?canisterId=bw4dl-smaaa-aaaaa-qaacq-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
    internet-identity: http://127.0.0.1:4943/?canisterId=bw4dl-smaaa-aaaaa-qaacq-cai&id=be2us-64aaa-aaaaa-qaabq-cai
    users: http://127.0.0.1:4943/?canisterId=bw4dl-smaaa-aaaaa-qaacq-cai&id=br5f7-7uaaa-aaaaa-qaaca-cai
```

You have to get the frontend URL and paste that value into `.env` file and assign that value to `NEXT_PUBLIC_INTERNET_IDENTITY_URL` variable.

Finally, you have execute the following commands:

```bash
dfx generate
dfx deploy
```

After running `dfx deploy`, you should see an output similar to this:

```bash
...
Deployed canisters.
URLs:
  Frontend canister via browser
    frontend: http://127.0.0.1:4943/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai
    internet-identity: http://127.0.0.1:4943/?canisterId=be2us-64aaa-aaaaa-qaabq-cai
  Backend canister via Candid interface:
    courses: http://127.0.0.1:4943/?canisterId=bw4dl-smaaa-aaaaa-qaacq-cai&id=bkyz2-fmaaa-aaaaa-qaaaq-cai
    internet-identity: http://127.0.0.1:4943/?canisterId=bw4dl-smaaa-aaaaa-qaacq-cai&id=be2us-64aaa-aaaaa-qaabq-cai
    users: http://127.0.0.1:4943/?canisterId=bw4dl-smaaa-aaaaa-qaacq-cai&id=br5f7-7uaaa-aaaaa-qaaca-cai
```

Now, you can copy the frontend URL and paste it into your browser.
