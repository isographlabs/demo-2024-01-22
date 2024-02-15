# Demo of Isograph DevEx

## Running the demo

```
npm run dev
```

## Updating generated code

```
yarn run iso
# or
yarn run iso --watch
```

:::note
A regression was introduced recently, so `yarn run iso` actually generates incorrect code at the moment. This should be fixed soon. In the mean time, you can manually update `/demo-2024-01-22/src/components/__isograph/Repository/Repository/reader.ts` to import `"../../Repository/removeStar/reader"` and `"../../Repository/addStar/reader"` instead of `"../../Starrable/addStar/reader"` and `"../../Starrable/removeStar/reader"`.
:::
