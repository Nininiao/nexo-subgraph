# nexo-subgraph
# Project description

The World's First Instant Crypto-backed Loans. The leading regulated financial institution for digital assets, pioneer of the 1st Instant Crypto Credit Lines™ and high-yield Earn on Crypto & Fiat services.

This repository contains the NEXO token smart-contract.

This is the subgraph, a collection of GraphQL schemas and mappings that parse the events broadcast by this subgraph on the Ethereum blockchain.

The smart contracts can be found here https://etherscan.io/address/0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206#code.

# Development
Before you can build, create and deploy this subgraph, you have to execute the following commands in the terminal:

$ yarn install

$ yarn prepare:mainnet

The first command installs all external dependencies, while the latter generates the subgraph.yaml file, which is required by The Graph.

The manual how to Build a Subgraph via Contract on Windows for a Non-Tech Curators you can find here https://ninadrokina.medium.com/how-to-build-a-subgraph-via-contract-on-windows-for-a-non-tech-curator-74d5d9e47e96
