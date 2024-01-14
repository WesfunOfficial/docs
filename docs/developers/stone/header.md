---
sidebar_position: 2
---

# Header

Stone archives are encoded with a version agnostic header, ensuring that version-specific
fields can be handled separately from version and format detection. This is a 32-byte header
at the start of the archive.

## Fields

    | Field   | Size     | Description              |
    |---------|----------|--------------------------|
    | magic   | 4 bytes  | Always `0x006d6f73`      | 
    | data    | 24 bytes | Version specific data    |
    | version | 4 bytes  | Version number, i.e. `1` |

## moss identifier

The "magic" is always recorded as `NUL` `M` `O` `S`, or:

```rust 
pub const STONE_MAGIC: &[u8; 4] = b"\0mos";
```