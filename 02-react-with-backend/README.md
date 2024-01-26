# Descentralize React APP with ICP Backend Services example

## How to use

Execute the following commands:

```bash
npm install
dfx start --background
dfx canister create --all
```

After that, you should see and output like this:

```bash
Creating canister courses...
courses canister created with canister id: cinef-v4aaa-aaaaa-qaalq-cai
Creating canister frontend...
frontend canister created with canister id: dfdal-2uaaa-aaaaa-qaama-cai
Creating canister internet-identity...
internet-identity canister created with canister id: dccg7-xmaaa-aaaaa-qaamq-cai
Creating canister users...
users canister created with canister id: dlbnd-beaaa-aaaaa-qaana-cai
```

Duplicate the `frontend/.env-example` file in the same directory and rename it to `.env`.

You need to modify the `.env` file with values derived from the previous output.

Now you have to execute following commands:

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
    frontend: http://127.0.0.1:4943/?canisterId=cbopz-duaaa-aaaaa-qaaka-cai
  Backend canister via Candid interface:
    courses: http://127.0.0.1:4943/?canisterId=cpmcr-yeaaa-aaaaa-qaala-cai&id=cuj6u-c4aaa-aaaaa-qaajq-cai
    users: http://127.0.0.1:4943/?canisterId=cpmcr-yeaaa-aaaaa-qaala-cai&id=cgpjn-omaaa-aaaaa-qaakq-cai
```

Now, you can copy the frontend URL and paste it into your browser.
