---
title: ShopGym
subtitle: Realistic simulation and scalable benchmarking for e-commerce web agents
summary: An open-source framework that turns live storefronts into reproducible sandbox shops and generates grounded evaluation tasks for shopping agents.
status: active
period: "2026"
order: 1
featured: true
draft: false
badges:
  - NeurIPS 2026 E&D
  - Open source
tech:
  - Python
  - TypeScript
  - GraphQL
highlights:
  - Accepted to the NeurIPS 2026 Evaluations & Datasets Track.
  - Generated 10 sandbox shops across different retail domains in one week.
  - Evaluated with 224 grounded tasks across six sandbox shops.
metadata:
  - label: Role
    value: Research & engineering
  - label: Venue
    value: NeurIPS 2026 Evaluations & Datasets Track
  - label: License
    value: MIT
links:
  - label: GitHub repository
    href: https://github.com/agentic-foundation-modeling-research/shop-gym
  - label: Paper
    href: https://arxiv.org/abs/2605.16116
---

## Overview

ShopGym is an integrated framework for building realistic, reproducible simulation environments and scalable benchmarks for e-commerce web agents. It preserves the structure and interaction patterns of live storefronts while producing self-contained environments that can be reset, inspected, and used safely for reinforcement learning and evaluation.

## System

The framework combines three core components:

- **ShopArena** converts live seed storefronts into deterministic sandbox shops with generated catalogs, navigation, policies, and interaction flows.
- **ShopGuru** synthesizes grounded evaluation tasks across seven shopping-agent skill categories.
- **ShopBackend** serves each sandbox through a local GraphQL API, supporting repeatable agent interaction and evaluation.

## My contribution

I designed and implemented the simulation-environment generation harness used for shopping-agent reinforcement learning and evaluation. The workflow generated 10 sandbox shops spanning different retail domains within one week.

## Results

ShopGym was validated through structural analysis and agent-based evaluation using 224 grounded tasks across six sandbox shops. Agent performance in the simulated environments correlated positively with performance on the corresponding live storefronts.

The work was accepted to the **NeurIPS 2026 Evaluations & Datasets Track** and was also selected for the **ICML 2026 RLxF Workshop** and **LSEI @ COLM 2026**.
