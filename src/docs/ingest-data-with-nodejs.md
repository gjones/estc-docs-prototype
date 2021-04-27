---
title: Ingest data with Node.js on Elasticsearch
description: Ingest data with Node.js on Elasticsearch
date: '2020-12-18'
abstract: 'This guide tells you how to get started with: Securely connecting to Elasticsearch Service with Node.js. Ingesting data into your deployment from your application. Searching and modifying your data on Elasticsearch Service'
---

This guide tells you how to get started with:

- Securely connecting to Elasticsearch Service with Node.js
- Ingesting data into your deployment from your application
- Searching and modifying your data on Elasticsearch Service

If you are an Node.js application programmer who is new to the Elastic Stack, this content can help you get started more easily.

_Time required: 45 minutes_

## Prerequisites

These steps are applicable to your existing application. If you don’t have one, you can use the example included here to create one.

### Create the npm `package.json` file

```
  npm init
```

### Get the `elasticsearch` and `config` packages

```
  npm install @elastic/elasticsearch
  npm install config
```

Note that the `config` package is not required if you have your own method to keep your configuration details private.

