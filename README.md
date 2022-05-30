# 10k Tall Tree Tracking

This repository contains the source code for the 10k Tall Tree tracking program, which is the City of SLO's program to plant 10,000 trees by 2035.

For more information and documents about the project, please view the [wiki](https://github.com/bglossner/tree-tracking-app/wiki).

## Frontend

The frontend (which is currently the entire site in this repo) is built with [React](https://reactjs.org/) and retrieves/stores data using [ArcGIS](https://www.arcgis.com/index.html).

For more information and instruction, go to the [frontend README](https://github.com/bglossner/tree-tracking-app/blob/main/packages/frontend/README.md).

## Scripts (./scripts)

For info about the `convert_starter_data.py` Python script, visit the [wiki](https://github.com/bglossner/tree-tracking-app/wiki/Loading-in-Existing-Content-to-ArcGIS-Table).

## Management/Tooling

This repository is managed by [`Lerna`](https://github.com/lerna/lerna), a monorepo management tool. Currently there is only 1 package in this repository, though. Lerna can be effectively used when adding more!
