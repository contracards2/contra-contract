## Contra Contracts & Metadata Generator.

This project contains the contracts for the first edition Contra cards along with a set of tools for generating and uploading metadata tokens to IPFS and instructions for deploying using the [Thirdweb SDK.](https://thirdweb.com/)

## Getting Started

Before you begin, make sure you have [asdf](https://asdf-vm.com/) installed as your version manager. This project uses Node.js, and asdf will help manage the Node.js version specified in the `.tool-versions` file.

1. Clone the repository:

```bash
git clone https://github.com/your-username/contra.git
cd contra
```

2. Install the required Node.js version using asdf:

```bash
asdf install
```

3. Install project dependencies:

```bash
npm install
```

## Building the project

After any changes to the contract, run:

```bash
npm run build
```

## Deploying Contracts

When you're ready to deploy your contracts, just run one of the following command to deploy you're contracts:

```bash
npm run deploy
```

## Metadata Generator, IPFS Batch upload, NFTS batch mint

Follow the documentation in the [\_docs](./_docs/contract.md) folder.
