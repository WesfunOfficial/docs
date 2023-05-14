---
sidebar_position: 4
---

# Build dependencies

Every build of a recipe by `boulder` will create an entirely new root, with only the absolute minimum support dependencies in place.
In order to build most software, you will need to add to the `builddeps` key in `stone.yml`. Luckily, our tooling supports more than
one kind of dep.

Note that Serpent OS packages are also capable of storing **providers** that make the following kinds of dependencies work.

## `$name` - standard deps

Simply listing a name will create a dependency on that package name. This is discouraged as automatically resolved providers offer a
far more resilient system.

```yaml
builddeps:
    - some-package
```

## `binary()` - Standard binaries

Got a hard requirement for an executable in `/usr/bin`, such as `grep` ?

```yaml
builddeps:
    - binary(grep)
```

## `sysbinary()` - System binaries

Need an executable only found in `/usr/sbin` ?

```yaml
builddeps:
    - sysbinary(mount)
```

## `pkgconfig()` - PkgConfig / pkgconf

Trivially map package names to standard `pkgconfig` names (`.pc` files):

```yaml
builddeps:
    - pkgconfig(ncurses)
    - pkgconfig(zlib)
```

## `pkgconfig32()` - 32-bit PkgConf

Much like `pkgconfig` - specifically designed for `.pc` files installed to `/usr/lib32/pkgconfig` in 32-bit builds:

```yaml
builddeps:
    - pkgconfig32(x11)
```

## `cmake()` - CMake modules

Work with many C++/CMake builds much more easily by using the CMake module names

```yaml
builddeps:
    - cmake(Qt5OpenGL)
```