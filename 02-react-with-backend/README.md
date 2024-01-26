# Descentralize React APP example

## How to use

Execute the following commands:

```bash
npm install
dfx start --background
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
