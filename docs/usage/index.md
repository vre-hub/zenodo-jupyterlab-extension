---
title: Frontend Usage
nav-order: 3
has_children: true
---

# Frontend Usage Guide

## Searching {#search}

The user has the ability to search both records and communities, which are collections of records. The actual search query ability is derived from [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-query-string-query.html), just as the [Zenodo REST API](https://developers.zenodo.org/#rest-api) is.

The results are returned in pages of 25 results, with the ability to navigate the pages of results. This leverages the built-in `page` and `size` parameters present in the Zenodo REST API, which appear as `kwargs` in `eOSSR`, the python library on which all backend communication with Zenodo is based.

### Record Information
When a record is selected, more record information is displayed:
* Title of the record as a link to the Zenodo record entry on (zenodo.org)
* Author List, with institutions available upon hovering
* List of files as download links (WIP, currently install to local computer, but in future updates will install to the `$HOME` directory in the Jupyter instance)

This interface is meant to mimic the record entries on (zenodo.org).