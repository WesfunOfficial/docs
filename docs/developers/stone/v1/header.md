---
sidebar_position: 1
---

# Header

The v1 header contains 3 fields to denote the type of the `.stone` file as well as a count
of the payloads. These are contained within the 24-byte `data` field of the agnostic header.

## Fields

    | Field         | Size     | Description                               |
    |---------------|----------|-------------------------------------------|
    | num_payloads  | 2 bytes  | Number of all payloads within the archive |
    | padding_chk   | 21 bytes | Simple corruption check (fixed content)   |
    | type          | 1 byte   | Denotes the archive type                  |

## The padding check

While building the stone format, we built-in the `.data` field to permit future extensions in subsequent
stone versions. As of v1, the `.padding_chk` field contains a statically initialised array as a mild corruption
check.

```rust
const INTEGRITY_CHECK: [u8; 21] = [
    0, 0, 1, 0, 0, 2, 0, 0, 3, 0, 0, 4, 0, 0, 5, 0, 0, 6, 0, 0, 7,
];
```

## Types

    | Name          | Value | Description                                                         |
    |---------------|-------|---------------------------------------------------------------------|
    | Binary        | 1     | Standard package                                                    |
    | Delta         | 2     | currently unused                                                    |
    | Repository    | 3     | A package repository index                                          |
    | BuildManifest | 4     | A build-time artefact containing the _yield potential_ of a package |