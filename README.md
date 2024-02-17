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
You should use the `@main` versions of the packages for this repo, as `v0.1.0` (i.e. the version you install with `yarn install @isograph/react`, etc.) has a regression, and generates incorrect artifacts. For this demo, you should:

```sh
yarn install @isograph/react@main
yarn install -D @isograph/compiler@main @isograph/babel-plugin@main
```

:::
