# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-06-04)

<section class="features">

### Features

-   [`c30bb89`](https://github.com/stdlib-js/stdlib/commit/c30bb89ea18eec5fcff098f16a30cc19315150e4) - add `string/base/slice-code-points` [(#5414)](https://github.com/stdlib-js/stdlib/pull/5414)
-   [`5fd8af8`](https://github.com/stdlib-js/stdlib/commit/5fd8af8015ce57db86127c6deec0561273eb6a39) - add `string/base/slice-grapheme-clusters` [(#5457)](https://github.com/stdlib-js/stdlib/pull/5457)
-   [`955bcbe`](https://github.com/stdlib-js/stdlib/commit/955bcbe5afffaff26af44cdd176a41a638d81f1b) - add `string/num-code-points` [(#5456)](https://github.com/stdlib-js/stdlib/pull/5456)
-   [`38b39db`](https://github.com/stdlib-js/stdlib/commit/38b39dba03763c4847268176872dcdccecc34f16) - add `string/base/slice` [(#5395)](https://github.com/stdlib-js/stdlib/pull/5395)
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`b3c2d12`](https://github.com/stdlib-js/stdlib/commit/b3c2d120d3da72729235e034c7db01644ff70fa3) - disable zero-padding for special values in `string/base/format-interpolate` [(#6957)](https://github.com/stdlib-js/stdlib/pull/6957)
-   [`5d5742b`](https://github.com/stdlib-js/stdlib/commit/5d5742b1d6b22eb0e9d597242035be42833c004c) - update `format-tokenize` to correctly handle escaped percent signs [(#6695)](https://github.com/stdlib-js/stdlib/pull/6695)
-   [`4c404c7`](https://github.com/stdlib-js/stdlib/commit/4c404c78dcb1a575ddc8d4b770122affdec5751d) - make CLI scripts executable [(#6085)](https://github.com/stdlib-js/stdlib/pull/6085)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`dc3d5b1`](https://github.com/stdlib-js/stdlib/commit/dc3d5b1a544dc54e76b709b762b840aeabfe0692) - **chore:** fix typo in test description _(by Philipp Burckhardt)_
-   [`b3c2d12`](https://github.com/stdlib-js/stdlib/commit/b3c2d120d3da72729235e034c7db01644ff70fa3) - **fix:** disable zero-padding for special values in `string/base/format-interpolate` [(#6957)](https://github.com/stdlib-js/stdlib/pull/6957) _(by Karan Anand)_
-   [`5d5742b`](https://github.com/stdlib-js/stdlib/commit/5d5742b1d6b22eb0e9d597242035be42833c004c) - **fix:** update `format-tokenize` to correctly handle escaped percent signs [(#6695)](https://github.com/stdlib-js/stdlib/pull/6695) _(by Karan Anand)_
-   [`c30bb89`](https://github.com/stdlib-js/stdlib/commit/c30bb89ea18eec5fcff098f16a30cc19315150e4) - **feat:** add `string/base/slice-code-points` [(#5414)](https://github.com/stdlib-js/stdlib/pull/5414) _(by Muhammad Haris)_
-   [`4c404c7`](https://github.com/stdlib-js/stdlib/commit/4c404c78dcb1a575ddc8d4b770122affdec5751d) - **fix:** make CLI scripts executable [(#6085)](https://github.com/stdlib-js/stdlib/pull/6085) _(by stdlib-bot)_
-   [`5fd8af8`](https://github.com/stdlib-js/stdlib/commit/5fd8af8015ce57db86127c6deec0561273eb6a39) - **feat:** add `string/base/slice-grapheme-clusters` [(#5457)](https://github.com/stdlib-js/stdlib/pull/5457) _(by Muhammad Haris, Athan Reines)_
-   [`955bcbe`](https://github.com/stdlib-js/stdlib/commit/955bcbe5afffaff26af44cdd176a41a638d81f1b) - **feat:** add `string/num-code-points` [(#5456)](https://github.com/stdlib-js/stdlib/pull/5456) _(by Muhammad Haris, Stephannie Jiménez Gacha)_
-   [`38b39db`](https://github.com/stdlib-js/stdlib/commit/38b39dba03763c4847268176872dcdccecc34f16) - **feat:** add `string/base/slice` [(#5395)](https://github.com/stdlib-js/stdlib/pull/5395) _(by Muhammad Haris, Athan Reines)_
-   [`7e8f02d`](https://github.com/stdlib-js/stdlib/commit/7e8f02ddf2771907ff71fc79b56e165c62c69bd6) - **docs:** update related packages sections [(#5434)](https://github.com/stdlib-js/stdlib/pull/5434) _(by stdlib-bot)_
-   [`6bcbe1f`](https://github.com/stdlib-js/stdlib/commit/6bcbe1f4e084722e6c0bb1a6ee79d4e985f524bb) - **refactor:** update require path _(by Athan Reines)_
-   [`22212ac`](https://github.com/stdlib-js/stdlib/commit/22212ac4eed8f336d9798ea7c70daf0ff0f1906a) - **docs:** update related packages sections [(#5129)](https://github.com/stdlib-js/stdlib/pull/5129) _(by stdlib-bot)_
-   [`dbb338e`](https://github.com/stdlib-js/stdlib/commit/dbb338e80336515e9f7ef602188985bbbe9b9010) - **docs:** update related packages sections [(#4690)](https://github.com/stdlib-js/stdlib/pull/4690) _(by stdlib-bot)_
-   [`563a4f8`](https://github.com/stdlib-js/stdlib/commit/563a4f826ab757636ae08094fc6f62746042da4b) - **docs:** update related packages sections [(#4594)](https://github.com/stdlib-js/stdlib/pull/4594) _(by stdlib-bot)_
-   [`e4a53d5`](https://github.com/stdlib-js/stdlib/commit/e4a53d5816f5918f7c7fc5135dce21d676835eca) - **docs:** update related packages sections [(#4399)](https://github.com/stdlib-js/stdlib/pull/4399) _(by stdlib-bot)_
-   [`0d8ee2d`](https://github.com/stdlib-js/stdlib/commit/0d8ee2dd2425d7414487f65940dfc4c25c79ad1d) - **docs:** update related packages sections [(#4334)](https://github.com/stdlib-js/stdlib/pull/4334) _(by stdlib-bot)_
-   [`a69e423`](https://github.com/stdlib-js/stdlib/commit/a69e423dc4990692cdf4ce6648544ba30594d7cb) - **docs:** update related packages sections [(#4265)](https://github.com/stdlib-js/stdlib/pull/4265) _(by stdlib-bot, Philipp Burckhardt)_
-   [`a6f3921`](https://github.com/stdlib-js/stdlib/commit/a6f3921560705503dcb5ee2575dd2f11417f58fb) - **docs:** update related packages sections [(#4242)](https://github.com/stdlib-js/stdlib/pull/4242) _(by stdlib-bot, Athan Reines)_
-   [`f9fce59`](https://github.com/stdlib-js/stdlib/commit/f9fce5904d09fc2f61c1d7c21d26e59f7de17420) - **docs:** update related packages sections [(#4212)](https://github.com/stdlib-js/stdlib/pull/4212) _(by stdlib-bot)_
-   [`4a70790`](https://github.com/stdlib-js/stdlib/commit/4a707903dfef7c2b56216000165706497d19a251) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`7d6450c`](https://github.com/stdlib-js/stdlib/commit/7d6450c671dd91fffbec536a216a76f9e094dad0) - **docs:** update related packages sections [(#4186)](https://github.com/stdlib-js/stdlib/pull/4186) _(by stdlib-bot)_
-   [`8684eb4`](https://github.com/stdlib-js/stdlib/commit/8684eb429498a239bff9bdd72f443dd1cd981552) - **docs:** update related packages sections [(#4114)](https://github.com/stdlib-js/stdlib/pull/4114) _(by stdlib-bot, Athan Reines)_
-   [`f317033`](https://github.com/stdlib-js/stdlib/commit/f3170337071651a2997d15ac194fc767570f2f75) - **docs:** update related packages sections [(#4040)](https://github.com/stdlib-js/stdlib/pull/4040) _(by stdlib-bot)_
-   [`a1b543a`](https://github.com/stdlib-js/stdlib/commit/a1b543a2a1bdf4d1fb9438bd4a13cb971af62063) - **docs:** update related packages sections [(#4009)](https://github.com/stdlib-js/stdlib/pull/4009) _(by stdlib-bot, Philipp Burckhardt)_
-   [`32deb11`](https://github.com/stdlib-js/stdlib/commit/32deb11c6a2453748d8db9554b6bb3fdb73a077f) - **docs:** update related packages sections [(#3976)](https://github.com/stdlib-js/stdlib/pull/3976) _(by stdlib-bot)_
-   [`b8c41df`](https://github.com/stdlib-js/stdlib/commit/b8c41df78cd2cdc9cd3c3c6b223759d32f4f6e14) - **docs:** update related packages sections [(#3915)](https://github.com/stdlib-js/stdlib/pull/3915) _(by stdlib-bot)_
-   [`2825b42`](https://github.com/stdlib-js/stdlib/commit/2825b42e8cd7483d15dfed1c6b389bfcb86d7ca0) - **docs:** update related packages sections [(#3898)](https://github.com/stdlib-js/stdlib/pull/3898) _(by stdlib-bot)_
-   [`bf5643f`](https://github.com/stdlib-js/stdlib/commit/bf5643fb1a3f32a60903d8e210f71571e609119f) - **docs:** update related packages sections [(#3404)](https://github.com/stdlib-js/stdlib/pull/3404) _(by stdlib-bot)_
-   [`ac06419`](https://github.com/stdlib-js/stdlib/commit/ac06419c2a8358dfd80818823f571077eb58958e) - **docs:** update related packages sections [(#3387)](https://github.com/stdlib-js/stdlib/pull/3387) _(by stdlib-bot)_
-   [`0a8192d`](https://github.com/stdlib-js/stdlib/commit/0a8192d68506a2abf4c3e52e1af9f1510e1660b4) - **docs:** update related packages sections [(#3370)](https://github.com/stdlib-js/stdlib/pull/3370) _(by stdlib-bot)_
-   [`7e8187a`](https://github.com/stdlib-js/stdlib/commit/7e8187a766886c2fb9cdc356cf781f0a1802172c) - **docs:** update related packages sections [(#3368)](https://github.com/stdlib-js/stdlib/pull/3368) _(by stdlib-bot)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Karan Anand
-   Muhammad Haris
-   Philipp Burckhardt
-   Stephannie Jiménez Gacha

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.3">

## 0.3.3 (2024-11-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.2">

## 0.3.2 (2024-11-05)

<section class="features">

### Features

-   [`2eded73`](https://github.com/stdlib-js/stdlib/commit/2eded73655c7d803cdbdce88d38af9bc5aab42b0) - add `base64ToUint8Array` to namespace
-   [`09e7120`](https://github.com/stdlib-js/stdlib/commit/09e71201868eaa8fb1c003c4de270b4002fa900c) - add `string/base/base64-to-uint8array`
-   [`095449b`](https://github.com/stdlib-js/stdlib/commit/095449bc5f6084b363a5b1dc1deb040fd029b76b) - add `atob` to namespace
-   [`37e0d70`](https://github.com/stdlib-js/stdlib/commit/37e0d70a86a621a109f74c68adbc6aa4a4177f0f) - add `string/base/atob`

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`abf0407`](https://github.com/stdlib-js/stdlib/commit/abf040787f6598438b0100a729a8331b7f80f62f) - **chore:** resolve lint errors in TS files _(by Philipp Burckhardt)_
-   [`b89c97c`](https://github.com/stdlib-js/stdlib/commit/b89c97ce0b812ff0b2aab16b4d77969d44fe3e8c) - **docs:** resolve lint errors in TS declaration files _(by Philipp Burckhardt)_
-   [`ff9fa81`](https://github.com/stdlib-js/stdlib/commit/ff9fa81f917d539f1a11fba5580e1744991a8a11) - **docs:** fix TSDoc lint errors _(by Philipp Burckhardt)_
-   [`8f72b43`](https://github.com/stdlib-js/stdlib/commit/8f72b432c0fc81a78641d5689722ecc9671c6f02) - **style:** add missing spaces around parentheses _(by Philipp Burckhardt)_
-   [`b723a6e`](https://github.com/stdlib-js/stdlib/commit/b723a6eaec97adad2da4ffbecb532a3d1ae1e0ba) - **docs:** fix errors in comments and clean-up _(by Philipp Burckhardt)_
-   [`6e9f42e`](https://github.com/stdlib-js/stdlib/commit/6e9f42e4c912485d9896eaa16c88b70fd3688e97) - **docs:** harmonize list formatting in repl.txt and ensure starting newline _(by Philipp Burckhardt)_
-   [`2eded73`](https://github.com/stdlib-js/stdlib/commit/2eded73655c7d803cdbdce88d38af9bc5aab42b0) - **feat:** add `base64ToUint8Array` to namespace _(by Athan Reines)_
-   [`09e7120`](https://github.com/stdlib-js/stdlib/commit/09e71201868eaa8fb1c003c4de270b4002fa900c) - **feat:** add `string/base/base64-to-uint8array` _(by Athan Reines)_
-   [`f200857`](https://github.com/stdlib-js/stdlib/commit/f2008570f57d9bdaec78ec212fe91858f68cf3ac) - **chore:** fix copyright year _(by Athan Reines)_
-   [`1c44dbd`](https://github.com/stdlib-js/stdlib/commit/1c44dbd95fa65436eb96e8dfc312d4d08df6c018) - **chore:** add browser entry point _(by Athan Reines)_
-   [`095449b`](https://github.com/stdlib-js/stdlib/commit/095449bc5f6084b363a5b1dc1deb040fd029b76b) - **feat:** add `atob` to namespace _(by Athan Reines)_
-   [`37e0d70`](https://github.com/stdlib-js/stdlib/commit/37e0d70a86a621a109f74c68adbc6aa4a4177f0f) - **feat:** add `string/base/atob` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.1">

## 0.3.1 (2024-08-18)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-08-17)

<section class="features">

### Features

-   [`67858b3`](https://github.com/stdlib-js/stdlib/commit/67858b341e920fed871e34ba0d6b6809804916f7) - improve type safety
-   [`09618b7`](https://github.com/stdlib-js/stdlib/commit/09618b7064d674d3e4afd1f67d877b1388098784) - update namespace TypeScript declarations
-   [`7f14562`](https://github.com/stdlib-js/stdlib/commit/7f145620d310738f2fd3bd15a3b97b803dff4e73) - add new packages to  namespaces
-   [`91f84da`](https://github.com/stdlib-js/stdlib/commit/91f84dabd8218e66dde7e25c570904e790d5e8a3) - add `string/base/for-each-code-point-right` [(#2163)](https://github.com/stdlib-js/stdlib/pull/2163)
-   [`22aaef5`](https://github.com/stdlib-js/stdlib/commit/22aaef5de7af0f8a54f4a7d39405cc4da9dc3cfd) - add `string/base/last` [(#2145)](https://github.com/stdlib-js/stdlib/pull/2145)
-   [`02c9e03`](https://github.com/stdlib-js/stdlib/commit/02c9e03dfacaa4edea3f59ab3caa6a86e640d280) - update namespace TypeScript declarations [(#2136)](https://github.com/stdlib-js/stdlib/pull/2136)
-   [`53c33cb`](https://github.com/stdlib-js/stdlib/commit/53c33cb04e6d897583ece98e24c4d98f5d87b471) - add `replaceAfterLast` to namespace
-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849) - resolve negative index arguments relative to last index
-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2) - resolve negative indices relative to the last character index
-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020) - resolve negative indices relative to the last string character
-   [`5a14851`](https://github.com/stdlib-js/stdlib/commit/5a14851f6eed952a9367c5b738678b4d21e66563) - add `replaceBeforeLast` to namespace
-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6) - support negative `fromIndex` arguments
-   [`b57c6fc`](https://github.com/stdlib-js/stdlib/commit/b57c6fcdf70cbeeec0c8ffbe28e5d77db9a525de) - update namespace TypeScript declarations [(#2128)](https://github.com/stdlib-js/stdlib/pull/2128)
-   [`7593460`](https://github.com/stdlib-js/stdlib/commit/759346086243f5fb6d5cad19fbede4547d156818) - add `forEachRight` to namespace
-   [`3f1a75d`](https://github.com/stdlib-js/stdlib/commit/3f1a75d23e95f7e9fc2b3452413f4a6b57b6358e) - add `replaceAfter` to namespace
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78) - add support for `fromIndex`
-   [`bbc3cfc`](https://github.com/stdlib-js/stdlib/commit/bbc3cfc074d775ed34c495d451323e789baafb8b) - add `string/base/last-grapheme-cluster` [(#1810)](https://github.com/stdlib-js/stdlib/pull/1810)
-   [`7bce237`](https://github.com/stdlib-js/stdlib/commit/7bce23772744ae439e8fc4d86f1abf92ea8a8b05) - add `string/base/last-code-point`
-   [`31405e7`](https://github.com/stdlib-js/stdlib/commit/31405e7d8346beb089c0d53e113c5c8927bcb12a) - add `string/to-well-formed`
-   [`3b6b680`](https://github.com/stdlib-js/stdlib/commit/3b6b680826a663ca6d22b4d5666ef84389143330) - add `string/base/last`
-   [`84a6f4b`](https://github.com/stdlib-js/stdlib/commit/84a6f4be753da2f694affc99d649b49f5e41e231) - add  `string/base/stickycase`
-   [`272f91b`](https://github.com/stdlib-js/stdlib/commit/272f91b30128d4536470605d01aeeb73d2684376) - add `string/base/replace-before-last` [(#1364)](https://github.com/stdlib-js/stdlib/pull/1364)
-   [`58bdac8`](https://github.com/stdlib-js/stdlib/commit/58bdac8a8a5914b7b2598f873418f9edae4c8843) - add `string/base/replace-after-last` [(#1365)](https://github.com/stdlib-js/stdlib/pull/1365)
-   [`0aa7b4a`](https://github.com/stdlib-js/stdlib/commit/0aa7b4ad8adfde545ba39a7a4d5ebf1afc502342) - add `string/base/for-each-right` [(#1369)](https://github.com/stdlib-js/stdlib/pull/1369)
-   [`04ee89f`](https://github.com/stdlib-js/stdlib/commit/04ee89f626756ab9da99b864ccbb9897964a568d) - add `string/base/replace-after` [(#1363)](https://github.com/stdlib-js/stdlib/pull/1363)
-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340)
-   [`4c552c8`](https://github.com/stdlib-js/stdlib/commit/4c552c83b9ca9036f88e3470bba404b1ad06fee6) - rename exported alias from `reverseString` to `reverse`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`4345839`](https://github.com/stdlib-js/stdlib/commit/43458394fe65479fe3ae8edd7fe062e59c37ca27) - resolve bug in `string/truncate` [(#2635)](https://github.com/stdlib-js/stdlib/pull/2635)
-   [`547f610`](https://github.com/stdlib-js/stdlib/commit/547f6104226a8eb84c0473628733d859741ae661) - perform explicit string casting when specifier is `%s`
-   [`683f370`](https://github.com/stdlib-js/stdlib/commit/683f3709b191dd50b265cca9c63f1a537e35d54e) - provide `fromIndex` to base implementation

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`67858b3`](https://github.com/stdlib-js/stdlib/commit/67858b341e920fed871e34ba0d6b6809804916f7): The return types are now more specific. This may break existing code that relies on less strict typing, but should not affect most users. To preserve the prior behavior, you can cast the return value to `string` via a type assertion.
-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849): resolve negative index arguments relative to last index

    -   Previously, a negative `fromIndex` argument would resolve to `0`.
        The current behavior resolves relative to the last character index.
        To preserve the previous behavior, users should clamp index arguments
        to index bounds before calling `replaceAfterLast`.

-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2): resolve negative indices relative to the last index

    -   Previously, negative index arguments would resolve to zero and
        search would start from the beginning of the string. To preserve
        previous behavior, users should clamp `fromIndex` values to string
        index bounds before calling into `replaceBefore`.

-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020): resolve negative indices relative to the last string character

    -   Previously, a negative index would resolve to `0`. This commit changes
        that behavior to resolve relative to the last index. To preserve
        previous behavior, users should clamp `fromIndex` values to string
        bounds before calling into `replaceAfter`.

-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6): resolve negative indices relative to last index

    -   In order to preserve prior behavior, users should insert a manual
        check before calling this API.

-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78): require `fromIndex` argument

    -   To migrate, users should provide an explicit `fromIndex` of `0` in
        order to retain previous behavior.

-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb): rename exported aliases

    -   To migrate, users should consult the relevant namespace documentation and associated commits in order to determine which aliases have been renamed.

-   [`4c552c8`](https://github.com/stdlib-js/stdlib/commit/4c552c83b9ca9036f88e3470bba404b1ad06fee6): rename exported alias from `reverseString` to `reverse`

    -   To migrate, users should drop the `String` suffix.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 5 issues were closed in this release:

[#812](https://github.com/stdlib-js/stdlib/issues/812), [#813](https://github.com/stdlib-js/stdlib/issues/813), [#814](https://github.com/stdlib-js/stdlib/issues/814), [#1729](https://github.com/stdlib-js/stdlib/issues/1729), [#2630](https://github.com/stdlib-js/stdlib/issues/2630)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`df3ed1e`](https://github.com/stdlib-js/stdlib/commit/df3ed1ee7fdc62c9f49bfa38eb1df240fb752a6e) - **docs:** update namespace ToCs _(by Athan Reines)_
-   [`7785577`](https://github.com/stdlib-js/stdlib/commit/7785577b5ad6c1978644642ccd519548b43f78a9) - **docs:** fix incorrect package description in `string/left-trim-n` _(by Snehil Shah)_
-   [`4345839`](https://github.com/stdlib-js/stdlib/commit/43458394fe65479fe3ae8edd7fe062e59c37ca27) - **fix:** resolve bug in `string/truncate` [(#2635)](https://github.com/stdlib-js/stdlib/pull/2635) _(by Snehil Shah)_
-   [`67858b3`](https://github.com/stdlib-js/stdlib/commit/67858b341e920fed871e34ba0d6b6809804916f7) - **feat:** improve type safety _(by Philipp Burckhardt)_
-   [`659f752`](https://github.com/stdlib-js/stdlib/commit/659f752db18317bf5fc237fdbcad0d74b61e1ed9) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`a78f7d1`](https://github.com/stdlib-js/stdlib/commit/a78f7d1b859b6b1d7b0bc0ee4daf76789e3e0910) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`c3ebfa8`](https://github.com/stdlib-js/stdlib/commit/c3ebfa80e311db338b171ebf8eb5f46bc66e9bf6) - **docs:** update namespace table of contents and address spelling errors _(by Philipp Burckhardt)_
-   [`547f610`](https://github.com/stdlib-js/stdlib/commit/547f6104226a8eb84c0473628733d859741ae661) - **fix:** perform explicit string casting when specifier is `%s` _(by Athan Reines)_
-   [`f8775e6`](https://github.com/stdlib-js/stdlib/commit/f8775e6bda51d0d2c72d8005e6e377bed1dcc499) - **refactor:** avoid use of global _(by Athan Reines)_
-   [`3806e20`](https://github.com/stdlib-js/stdlib/commit/3806e206f436e4aad81f5bfe80f637fb6b83aa8b) - **build:** add cspell ESLint plugin for spellchecking [(#2234)](https://github.com/stdlib-js/stdlib/pull/2234) _(by Philipp Burckhardt, Athan Reines)_
-   [`9ef09e2`](https://github.com/stdlib-js/stdlib/commit/9ef09e2cb6c9e777edcccaacd9d2ff681b0b4381) - **docs:** update related packages sections  [(#2248)](https://github.com/stdlib-js/stdlib/pull/2248) _(by stdlib-bot)_
-   [`09618b7`](https://github.com/stdlib-js/stdlib/commit/09618b7064d674d3e4afd1f67d877b1388098784) - **feat:** update namespace TypeScript declarations _(by stdlib-bot, Philipp Burckhardt)_
-   [`fad5efb`](https://github.com/stdlib-js/stdlib/commit/fad5efbeba4c9a051dd8a99eb3501f71f7847892) - **docs:** update namespace table of contents [(#2244)](https://github.com/stdlib-js/stdlib/pull/2244) _(by stdlib-bot, Philipp Burckhardt)_
-   [`ec98887`](https://github.com/stdlib-js/stdlib/commit/ec9888724c28aa7218d88ff62b91b71c0089c559) - **docs:** update related packages sections [(#2241)](https://github.com/stdlib-js/stdlib/pull/2241) _(by stdlib-bot)_
-   [`53fd65d`](https://github.com/stdlib-js/stdlib/commit/53fd65de03a466f6cf3ca0752c0908a57ef151b1) - **docs:** update related packages sections [(#2240)](https://github.com/stdlib-js/stdlib/pull/2240) _(by stdlib-bot)_
-   [`7f14562`](https://github.com/stdlib-js/stdlib/commit/7f145620d310738f2fd3bd15a3b97b803dff4e73) - **feat:** add new packages to  namespaces _(by Philipp Burckhardt)_
-   [`aaa391a`](https://github.com/stdlib-js/stdlib/commit/aaa391a46214c21dca294506d06ac0b3d59512ce) - **chore:** fix typos _(by Philipp Burckhardt)_
-   [`113ec19`](https://github.com/stdlib-js/stdlib/commit/113ec1946e4f10fbcce6cc59a57022afcdb582f5) - **docs:** update related packages sections [(#2207)](https://github.com/stdlib-js/stdlib/pull/2207 ) _(by stdlib-bot)_
-   [`189c569`](https://github.com/stdlib-js/stdlib/commit/189c5691b88b36a2fd1ff53368e6d44b90e40535) - **docs:** update related packages sections [(#2194)](https://github.com/stdlib-js/stdlib/pull/2194) _(by stdlib-bot)_
-   [`91f84da`](https://github.com/stdlib-js/stdlib/commit/91f84dabd8218e66dde7e25c570904e790d5e8a3) - **feat:** add `string/base/for-each-code-point-right` [(#2163)](https://github.com/stdlib-js/stdlib/pull/2163) _(by Ahmed Khaled, Athan Reines)_
-   [`57e8762`](https://github.com/stdlib-js/stdlib/commit/57e87620ec449ad73b884e3b4850537df0c494fe) - **chore:** change to relative require paths and fix code style _(by Philipp Burckhardt)_
-   [`a9bf096`](https://github.com/stdlib-js/stdlib/commit/a9bf0960cff2227ff551671eb2de9e00e7c9851c) - **chore:** use relative paths for internal requires _(by Philipp Burckhardt)_
-   [`22aaef5`](https://github.com/stdlib-js/stdlib/commit/22aaef5de7af0f8a54f4a7d39405cc4da9dc3cfd) - **feat:** add `string/base/last` [(#2145)](https://github.com/stdlib-js/stdlib/pull/2145) _(by Aditya Sapra)_
-   [`4b7bda7`](https://github.com/stdlib-js/stdlib/commit/4b7bda7cf10fd6dfdd4246152a120da2860893c7) - **docs:** update namespace table of contents [(#2137)](https://github.com/stdlib-js/stdlib/pull/2137) _(by stdlib-bot, Athan Reines)_
-   [`02c9e03`](https://github.com/stdlib-js/stdlib/commit/02c9e03dfacaa4edea3f59ab3caa6a86e640d280) - **feat:** update namespace TypeScript declarations [(#2136)](https://github.com/stdlib-js/stdlib/pull/2136) _(by stdlib-bot, Athan Reines)_
-   [`53c33cb`](https://github.com/stdlib-js/stdlib/commit/53c33cb04e6d897583ece98e24c4d98f5d87b471) - **feat:** add `replaceAfterLast` to namespace _(by Athan Reines)_
-   [`ec1c506`](https://github.com/stdlib-js/stdlib/commit/ec1c5066955fdcc71013805a5c55fc739d29a849) - **feat:** resolve negative index arguments relative to last index _(by Athan Reines)_
-   [`693efb2`](https://github.com/stdlib-js/stdlib/commit/693efb2eb159d1cd25c6cffe2440e36e6a14b9b2) - **feat:** resolve negative indices relative to the last character index _(by Athan Reines)_
-   [`b5c7e64`](https://github.com/stdlib-js/stdlib/commit/b5c7e647156eaf0ca5234210b2f98b0c22bd7ed7) - **docs:** update examples _(by Athan Reines)_
-   [`2512e10`](https://github.com/stdlib-js/stdlib/commit/2512e109d8d9928b006daac2ecdde8a51e272966) - **docs:** update examples _(by Athan Reines)_
-   [`b665537`](https://github.com/stdlib-js/stdlib/commit/b6655370f23b4bfdccc19c55af18699c2f368020) - **feat:** resolve negative indices relative to the last string character _(by Athan Reines)_
-   [`522a048`](https://github.com/stdlib-js/stdlib/commit/522a048a7f63c2349d966b799e5b63d9842b5d13) - **docs:** fix typos _(by Athan Reines)_
-   [`5a14851`](https://github.com/stdlib-js/stdlib/commit/5a14851f6eed952a9367c5b738678b4d21e66563) - **feat:** add `replaceBeforeLast` to namespace _(by Athan Reines)_
-   [`b6cb1d3`](https://github.com/stdlib-js/stdlib/commit/b6cb1d392dab74242900a91b30c256d5b608dea6) - **feat:** support negative `fromIndex` arguments _(by Athan Reines)_
-   [`728a1cf`](https://github.com/stdlib-js/stdlib/commit/728a1cf6e48d8ec71ebba5e09ddae2dd66a7b74c) - **docs:** update namespace table of contents [(#2129)](https://github.com/stdlib-js/stdlib/pull/2129) _(by stdlib-bot, Athan Reines)_
-   [`b57c6fc`](https://github.com/stdlib-js/stdlib/commit/b57c6fcdf70cbeeec0c8ffbe28e5d77db9a525de) - **feat:** update namespace TypeScript declarations [(#2128)](https://github.com/stdlib-js/stdlib/pull/2128) _(by stdlib-bot, Athan Reines)_
-   [`7593460`](https://github.com/stdlib-js/stdlib/commit/759346086243f5fb6d5cad19fbede4547d156818) - **feat:** add `forEachRight` to namespace _(by Athan Reines)_
-   [`bd6ee6f`](https://github.com/stdlib-js/stdlib/commit/bd6ee6f38d48df3f6a629b25636833266ac175bc) - **refactor:** improve type inference _(by Athan Reines)_
-   [`ae446ec`](https://github.com/stdlib-js/stdlib/commit/ae446ec18d3f87bba603f689ac8cbd3de5bca88c) - **refactor:** improve type inference _(by Athan Reines)_
-   [`da01a05`](https://github.com/stdlib-js/stdlib/commit/da01a057dd27c60f1774834836143dd818d2c690) - **refactor:** improve type inference _(by Athan Reines)_
-   [`fb8b73b`](https://github.com/stdlib-js/stdlib/commit/fb8b73b56151797a99a8ce4703f1cf5848109084) - **refactor:** improve type inference and update descriptions _(by Athan Reines)_
-   [`3f1a75d`](https://github.com/stdlib-js/stdlib/commit/3f1a75d23e95f7e9fc2b3452413f4a6b57b6358e) - **feat:** add `replaceAfter` to namespace _(by Athan Reines)_
-   [`683f370`](https://github.com/stdlib-js/stdlib/commit/683f3709b191dd50b265cca9c63f1a537e35d54e) - **fix:** provide `fromIndex` to base implementation _(by Athan Reines)_
-   [`29d7b0d`](https://github.com/stdlib-js/stdlib/commit/29d7b0dc141e1112af120eab76fa6731b8fdbe78) - **feat:** add support for `fromIndex` _(by Athan Reines)_
-   [`bbc3cfc`](https://github.com/stdlib-js/stdlib/commit/bbc3cfc074d775ed34c495d451323e789baafb8b) - **feat:** add `string/base/last-grapheme-cluster` [(#1810)](https://github.com/stdlib-js/stdlib/pull/1810) _(by Aditya Sapra, Athan Reines)_
-   [`2c3c709`](https://github.com/stdlib-js/stdlib/commit/2c3c709353a0821a187ff63251a296f558f951a1) - **docs:** update related packages sections [(#1941)](https://github.com/stdlib-js/stdlib/pull/1941) _(by stdlib-bot)_
-   [`0616f00`](https://github.com/stdlib-js/stdlib/commit/0616f00c08b92c0c40ac1a1cabee46994e8d6d63) - **docs:** update related packages sections _(by stdlib-bot)_
-   [`7bce237`](https://github.com/stdlib-js/stdlib/commit/7bce23772744ae439e8fc4d86f1abf92ea8a8b05) - **feat:** add `string/base/last-code-point` _(by Aditya Sapra, Pranav, Philipp Burckhardt)_
-   [`dc20da0`](https://github.com/stdlib-js/stdlib/commit/dc20da0604fe2798e20e757277072fefc876da3c) - **chore:** update package meta data [(#1856)](https://github.com/stdlib-js/stdlib/pull/1856) _(by stdlib-bot, Philipp Burckhardt)_
-   [`d40dbaf`](https://github.com/stdlib-js/stdlib/commit/d40dbafc25e3e10c8fa83f5b4203db97c289823c) - **chore:** update package meta data [(#1812)](https://github.com/stdlib-js/stdlib/pull/1812) _(by stdlib-bot)_
-   [`31405e7`](https://github.com/stdlib-js/stdlib/commit/31405e7d8346beb089c0d53e113c5c8927bcb12a) - **feat:** add `string/to-well-formed` _(by Pratik Singh, Pranav, Philipp Burckhardt)_
-   [`3b6b680`](https://github.com/stdlib-js/stdlib/commit/3b6b680826a663ca6d22b4d5666ef84389143330) - **feat:** add `string/base/last` _(by Aditya Sapra, Philipp Burckhardt)_
-   [`84a6f4b`](https://github.com/stdlib-js/stdlib/commit/84a6f4be753da2f694affc99d649b49f5e41e231) - **feat:** add  `string/base/stickycase` _(by Anudeep Sanapala, stdlib-bot, Philipp Burckhardt)_
-   [`272f91b`](https://github.com/stdlib-js/stdlib/commit/272f91b30128d4536470605d01aeeb73d2684376) - **feat:** add `string/base/replace-before-last` [(#1364)](https://github.com/stdlib-js/stdlib/pull/1364) _(by Golden Kumar, stdlib-bot, Athan Reines, Philipp Burckhardt)_
-   [`58bdac8`](https://github.com/stdlib-js/stdlib/commit/58bdac8a8a5914b7b2598f873418f9edae4c8843) - **feat:** add `string/base/replace-after-last` [(#1365)](https://github.com/stdlib-js/stdlib/pull/1365) _(by Golden Kumar, Athan Reines, Philipp Burckhardt)_
-   [`0aa7b4a`](https://github.com/stdlib-js/stdlib/commit/0aa7b4ad8adfde545ba39a7a4d5ebf1afc502342) - **feat:** add `string/base/for-each-right` [(#1369)](https://github.com/stdlib-js/stdlib/pull/1369) _(by Ahmed Khaled, Philipp Burckhardt)_
-   [`04ee89f`](https://github.com/stdlib-js/stdlib/commit/04ee89f626756ab9da99b864ccbb9897964a568d) - **feat:** add `string/base/replace-after` [(#1363)](https://github.com/stdlib-js/stdlib/pull/1363) _(by Golden Kumar, Athan Reines)_
-   [`c85743c`](https://github.com/stdlib-js/stdlib/commit/c85743c72136bd824a495d1717cc32f60c91d0d6) - **style:** add missing space _(by Athan Reines)_
-   [`6bff34f`](https://github.com/stdlib-js/stdlib/commit/6bff34fcc4cbc7c17b7ff99beed20cdd0ea1b3c0) - **style:** add missing space _(by Athan Reines)_
-   [`39b8176`](https://github.com/stdlib-js/stdlib/commit/39b81766b9d8a5e89ba4a26e5ea07f6413b46973) - **docs:** update namespace table of contents [(#1341)](https://github.com/stdlib-js/stdlib/pull/1341) _(by stdlib-bot, Athan Reines)_
-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - **feat:** update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340) _(by stdlib-bot, Athan Reines)_
-   [`4c552c8`](https://github.com/stdlib-js/stdlib/commit/4c552c83b9ca9036f88e3470bba404b1ad06fee6) - **feat:** rename exported alias from `reverseString` to `reverse` _(by Athan Reines)_
-   [`0b15ebe`](https://github.com/stdlib-js/stdlib/commit/0b15ebe4d724b7aec7f27c47f4886bdac3adb7ae) - **docs:** update related packages sections  [(#1310)](https://github.com/stdlib-js/stdlib/pull/1310) _(by stdlib-bot)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 9 people contributed to this release. Thank you to the following contributors:

-   Aditya Sapra
-   Ahmed Khaled
-   Anudeep Sanapala
-   Athan Reines
-   Golden Kumar
-   Philipp Burckhardt
-   Pranav Goswami
-   Pratik Singh
-   Snehil Shah

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-05)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-05)

<section class="features">

### Features

-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221)
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - update namespace exports
-   [`165ab63`](https://github.com/stdlib-js/stdlib/commit/165ab63d2f841d54753be8572f7db06be878dfbb) - add `string/base/distances/hamming` (#1166) [(#1166)](https://github.com/stdlib-js/stdlib/pull/1166)
-   [`e4cf6a5`](https://github.com/stdlib-js/stdlib/commit/e4cf6a5254fbcc8ca5e858c2fc5a7fcb0a648164) - add `string/base/altcase` [(#1173)](https://github.com/stdlib-js/stdlib/pull/1173)
-   [`d859ee0`](https://github.com/stdlib-js/stdlib/commit/d859ee084ec4a90e53cd6914c8abd1633ade0b54) - add `string/base/truncate-middle` [(#1118)](https://github.com/stdlib-js/stdlib/pull/1118)
-   [`fc8fba0`](https://github.com/stdlib-js/stdlib/commit/fc8fba022a9a5736d126b6b9c23f1091703c3398) - add `string/next-code-point-index` [(#1117)](https://github.com/stdlib-js/stdlib/pull/1117)

</section>

<!-- /.features -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#850](https://github.com/stdlib-js/stdlib/issues/850)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`4fbe560`](https://github.com/stdlib-js/stdlib/commit/4fbe560cf893eddc87b9e9dc9fcef62948608cba) - **docs:** fix typo _(by Athan Reines)_
-   [`fcb82a9`](https://github.com/stdlib-js/stdlib/commit/fcb82a9e8257421d25a08017a1575808f847842e) - **docs:** fix typo _(by Athan Reines)_
-   [`0c541d8`](https://github.com/stdlib-js/stdlib/commit/0c541d849099e8c4707fd5f4742849b5e998aefc) - **docs:** fix typo _(by Athan Reines)_
-   [`5132a24`](https://github.com/stdlib-js/stdlib/commit/5132a24b73a2525bb6ca8bea195ef901333311fd) - **docs:** fix typo _(by Athan Reines)_
-   [`97992ab`](https://github.com/stdlib-js/stdlib/commit/97992abedd7d2a3d6daf644c6b12e979642c6783) - **docs:** update related packages sections [(#1301)](https://github.com/stdlib-js/stdlib/pull/1301) _(by stdlib-bot)_
-   [`afa953b`](https://github.com/stdlib-js/stdlib/commit/afa953bde057e396e614ea35b7a32fd5b77479ea) - **docs:** update related packages sections [(#1281)](https://github.com/stdlib-js/stdlib/pull/1281) _(by stdlib-bot)_
-   [`ebc4ef4`](https://github.com/stdlib-js/stdlib/commit/ebc4ef41984741deef8134ed7fa3003f5a1e2e71) - **docs:** update related packages sections [(#1273)](https://github.com/stdlib-js/stdlib/pull/1273) _(by stdlib-bot)_
-   [`c5ec686`](https://github.com/stdlib-js/stdlib/commit/c5ec686da087534151644c4fe060656dbec0d5c8) - **docs:** update related packages sections [(#1272)](https://github.com/stdlib-js/stdlib/pull/1272) _(by stdlib-bot)_
-   [`68413e0`](https://github.com/stdlib-js/stdlib/commit/68413e05376206b18c4ff8662a8568a189dad77e) - **feat:** update namespace TypeScript declarations [(#1221)](https://github.com/stdlib-js/stdlib/pull/1221) _(by stdlib-bot, Philipp Burckhardt)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`5c8d407`](https://github.com/stdlib-js/stdlib/commit/5c8d407a1ae6fb6128343b7465741922369d500a) - **docs:** update related packages sections [(#1255)](https://github.com/stdlib-js/stdlib/pull/1255) _(by stdlib-bot)_
-   [`9b87012`](https://github.com/stdlib-js/stdlib/commit/9b87012e598bd0d2692af5d59332cb0e2231e9e8) - **docs:** update related packages sections [(#1243)](https://github.com/stdlib-js/stdlib/pull/1243) _(by stdlib-bot)_
-   [`8ef1f9e`](https://github.com/stdlib-js/stdlib/commit/8ef1f9eb45527886ba9b0c341704c8ffe6cffbb3) - **docs:** update related packages sections [(#1233)](https://github.com/stdlib-js/stdlib/pull/1233) _(by stdlib-bot)_
-   [`5184bd0`](https://github.com/stdlib-js/stdlib/commit/5184bd0461e8c78f983d4b619a863d93c52c6396) - **docs:** update namespace table of contents [(#1213)](https://github.com/stdlib-js/stdlib/pull/1213) _(by stdlib-bot, Athan Reines)_
-   [`b1e4cca`](https://github.com/stdlib-js/stdlib/commit/b1e4cca30147188064b2275a0242a0334befbcd1) - **feat:** update namespace exports _(by Philipp Burckhardt)_
-   [`cf3668f`](https://github.com/stdlib-js/stdlib/commit/cf3668f92234f5b25369001ca6a05a434d577ba1) - **docs:** update related packages sections [(#1210)](https://github.com/stdlib-js/stdlib/pull/1210) _(by stdlib-bot)_
-   [`5e1216b`](https://github.com/stdlib-js/stdlib/commit/5e1216ba1318f0eb364b2fe7eae6056cb7a5e94f) - **docs:** update related packages sections [(#1192)](https://github.com/stdlib-js/stdlib/pull/1192) _(by stdlib-bot)_
-   [`165ab63`](https://github.com/stdlib-js/stdlib/commit/165ab63d2f841d54753be8572f7db06be878dfbb) - **feat:** add `string/base/distances/hamming` (#1166) [(#1166)](https://github.com/stdlib-js/stdlib/pull/1166) _(by Robert Gislason, Athan Reines)_
-   [`1879534`](https://github.com/stdlib-js/stdlib/commit/18795348ac0c51d3b13c1b26c0f5921ec5fd010c) - **docs:** update related packages sections [(#1179)](https://github.com/stdlib-js/stdlib/pull/1179) _(by stdlib-bot)_
-   [`e4cf6a5`](https://github.com/stdlib-js/stdlib/commit/e4cf6a5254fbcc8ca5e858c2fc5a7fcb0a648164) - **feat:** add `string/base/altcase` [(#1173)](https://github.com/stdlib-js/stdlib/pull/1173) _(by Jaysukh Makvana, Athan Reines)_
-   [`4d6b104`](https://github.com/stdlib-js/stdlib/commit/4d6b104a0309b9a016700badd64b137ff384de52) - **docs:** update related packages sections [(#1172)](https://github.com/stdlib-js/stdlib/pull/1172) _(by stdlib-bot, Athan Reines)_
-   [`74bf172`](https://github.com/stdlib-js/stdlib/commit/74bf172cde4e19feaf4840c9e03b904bf9819934) - **docs:** update related packages sections [(#1165)](https://github.com/stdlib-js/stdlib/pull/1165) _(by stdlib-bot)_
-   [`6ff6caf`](https://github.com/stdlib-js/stdlib/commit/6ff6cafeb4e71cb856ded8e0b42957a627fe617d) - **docs:** update namespace table of contents [(#1162)](https://github.com/stdlib-js/stdlib/pull/1162 ) _(by stdlib-bot)_
-   [`26cf434`](https://github.com/stdlib-js/stdlib/commit/26cf4347b243f1f363273481512e1ffebcb27ad5) - **docs:** update related packages sections [(#1156)](https://github.com/stdlib-js/stdlib/pull/1156) _(by stdlib-bot)_
-   [`2f0cb7e`](https://github.com/stdlib-js/stdlib/commit/2f0cb7ed139b763e65205939511c7cc85b947e64) - **docs:** update related packages sections [(#1154)](https://github.com/stdlib-js/stdlib/pull/1154) _(by stdlib-bot)_
-   [`57d81e4`](https://github.com/stdlib-js/stdlib/commit/57d81e4c196065f6680f08f22aeccfdc6e590b8f) - **docs:** update related packages sections [(#1151)](https://github.com/stdlib-js/stdlib/pull/1151) _(by stdlib-bot)_
-   [`73f98e4`](https://github.com/stdlib-js/stdlib/commit/73f98e4e8dea53ece4a617b042f9d817643b4850) - **docs:** update related packages sections [(#1150)](https://github.com/stdlib-js/stdlib/pull/1150) _(by stdlib-bot)_
-   [`78a556e`](https://github.com/stdlib-js/stdlib/commit/78a556efa2f1da29eb9081d393f5768ad1518117) - **docs:** update related packages sections [(#1145)](https://github.com/stdlib-js/stdlib/pull/1145) _(by stdlib-bot)_
-   [`739e562`](https://github.com/stdlib-js/stdlib/commit/739e5627234ca4ae9198f384063a4a3201c6c407) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d859ee0`](https://github.com/stdlib-js/stdlib/commit/d859ee084ec4a90e53cd6914c8abd1633ade0b54) - **feat:** add `string/base/truncate-middle` [(#1118)](https://github.com/stdlib-js/stdlib/pull/1118) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`fc8fba0`](https://github.com/stdlib-js/stdlib/commit/fc8fba022a9a5736d126b6b9c23f1091703c3398) - **feat:** add `string/next-code-point-index` [(#1117)](https://github.com/stdlib-js/stdlib/pull/1117) _(by Stephannie Jiménez Gacha, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jaysukh Makvana
-   Philipp Burckhardt
-   Robert Gislason
-   Stephannie Jiménez Gacha

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2023-11-08)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-11-08)

<section class="features">

### Features

-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122)
-   [`de17736`](https://github.com/stdlib-js/stdlib/commit/de1773601713083ef826105a70df23c8750f9559) - refactor `string/reverse` and add `mode` option [(#1082)](https://github.com/stdlib-js/stdlib/pull/1082)
-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079)
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089)
-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - update minimum TypeScript version
-   [`d52e01c`](https://github.com/stdlib-js/stdlib/commit/d52e01c4a23d0a52ecacab0f16b663383dba96b7) - add `removeFirst*` packages to namespace
-   [`d1ded85`](https://github.com/stdlib-js/stdlib/commit/d1ded8522b3ef71491fd262ec2157dd198dff1ac) - add \"base\" string packages and refactor `string/remove-first` [(#1073)](https://github.com/stdlib-js/stdlib/pull/1073)
-   [`89910da`](https://github.com/stdlib-js/stdlib/commit/89910daae54261b8fd21ee548b1a608aa0c65f12) - update namespace TypeScript declarations [(#1068)](https://github.com/stdlib-js/stdlib/pull/1068)
-   [`f64cbb8`](https://github.com/stdlib-js/stdlib/commit/f64cbb84ef5c272ce3c224eb2cc7f89236ee6984) - add `headercase` to namespace
-   [`c85038d`](https://github.com/stdlib-js/stdlib/commit/c85038d939b199a48e9d5fbf4e6dfe52aa890842) - add `string/headercase`
-   [`fc6156d`](https://github.com/stdlib-js/stdlib/commit/fc6156deddcbbd350bbb9eb01a8e4a1a9227f2bd) - add support for specifying the iteration mode
-   [`1389946`](https://github.com/stdlib-js/stdlib/commit/13899464bcfa46098af5ed215df3e3c05129c7a6) - add `forEach` to namespace
-   [`bc8bdba`](https://github.com/stdlib-js/stdlib/commit/bc8bdba5e90f81bed942f5f0114c6373d323f9b6) - add `string/base/for-each`
-   [`ed5abeb`](https://github.com/stdlib-js/stdlib/commit/ed5abeb8355e9798b95976f8e89120d022396e17) - add `forEachCodePoint` to namespace
-   [`a145df2`](https://github.com/stdlib-js/stdlib/commit/a145df2c49fe0ba4872b0c8cac588a0033db355a) - add `string/base/for-each-code-point`
-   [`1b8d401`](https://github.com/stdlib-js/stdlib/commit/1b8d401959a90b8dac6c0ebb139d009800f4c9d2) - add `forEachGraphemeCluster` to namespace
-   [`b574ced`](https://github.com/stdlib-js/stdlib/commit/b574cede2f83be2615a5227ba57fea7fd603645a) - add `string/base/for-each-grapheme-cluster`
-   [`262a07b`](https://github.com/stdlib-js/stdlib/commit/262a07b5904884349c40d86682f76b9b5224450e) - add type definitions for provided callback
-   [`94e0f38`](https://github.com/stdlib-js/stdlib/commit/94e0f38720226a560a563f48c5bbfcf7a2925109) - add support for specifying the type of characters to return
-   [`810ebc1`](https://github.com/stdlib-js/stdlib/commit/810ebc1b4d4b5eaf023f5281774e54db733bb4e0) - update namespace TypeScript declarations [(#1047)](https://github.com/stdlib-js/stdlib/pull/1047)
-   [`8758d21`](https://github.com/stdlib-js/stdlib/commit/8758d213498f06bd26e770991724c59b3485ffbb) - add `distances` to namespace
-   [`bc8f74c`](https://github.com/stdlib-js/stdlib/commit/bc8f74c639792f47f1af2d36831bcbafeb85054a) - add `first`, `firstCodePoint`, and `firstGraphemeCluster` to namespace
-   [`71e5de2`](https://github.com/stdlib-js/stdlib/commit/71e5de2d7187757ba15043cffac77385d9d6e0aa) - add `string/base/first-grapheme-cluster`
-   [`c80f976`](https://github.com/stdlib-js/stdlib/commit/c80f97615bfc29e0fcc0b0cf1d70d0240b5191f5) - add `string/base/first-code-point`
-   [`cfdd473`](https://github.com/stdlib-js/stdlib/commit/cfdd47366d9599c07ab27e3886de66ec76f7591c) - add `string/base/first`
-   [`055d0c6`](https://github.com/stdlib-js/stdlib/commit/055d0c64d556ac2c621488d293813a84e9b0a73c) - add `dotspace`
-   [`787a967`](https://github.com/stdlib-js/stdlib/commit/787a96729d083686118fe049a023526791063d28) - add `string/dotcase`
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044)
-   [`75c52a3`](https://github.com/stdlib-js/stdlib/commit/75c52a3d1b7946c8ec9d3209f2d28054f0441d77) - add `forEach` to namespace
-   [`6d01566`](https://github.com/stdlib-js/stdlib/commit/6d01566f6546dfdc3ac393fe584659c203dbad3e) - add `first` to namespace
-   [`0e987b6`](https://github.com/stdlib-js/stdlib/commit/0e987b6fde52d7ef3060f8a47ed25573644025a5) - update namespace
-   [`2dca659`](https://github.com/stdlib-js/stdlib/commit/2dca659781d39918edce23ee741fad6d01d91849) - add `@stdlib/string/base/headercase` [(#1039)](https://github.com/stdlib-js/stdlib/pull/1039)
-   [`fb10080`](https://github.com/stdlib-js/stdlib/commit/fb100802c35339f6a5fafe6a0a88f28658eb5bbe) - add `string/for-each` [(#1027)](https://github.com/stdlib-js/stdlib/pull/1027)
-   [`223eb98`](https://github.com/stdlib-js/stdlib/commit/223eb983e3ed03c4927fdd30aad6d1d52813c699) - update namespace TypeScript declarations
-   [`c40a139`](https://github.com/stdlib-js/stdlib/commit/c40a1396adb204bf1f9c6d550d99884a8004b424) - add `string/base/distances/levenshtein` [(#1030)](https://github.com/stdlib-js/stdlib/pull/1030 )
-   [`cc26fd2`](https://github.com/stdlib-js/stdlib/commit/cc26fd22d6ee10cec6fb22a87352e9f94a5fa803) - add `string/first` [(#989)](https://github.com/stdlib-js/stdlib/pull/989)
-   [`857646f`](https://github.com/stdlib-js/stdlib/commit/857646f2545aa881c816b8040621225a9b9e6a27) - add base package to right pad a string
-   [`a7d8f42`](https://github.com/stdlib-js/stdlib/commit/a7d8f429e9058cebfb4931309d5712b05f8c7931) - add `invcase` to namespace
-   [`93aca6c`](https://github.com/stdlib-js/stdlib/commit/93aca6cb37c64fdd4cc92fe0405968699bc5e520) - add `string/base/invcase` [(#974)](https://github.com/stdlib-js/stdlib/pull/974)
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951)
-   [`0036663`](https://github.com/stdlib-js/stdlib/commit/003666350dfb2618a59375991afda18b5914e1e5) - add `replaceBefore` to namespace
-   [`5eded94`](https://github.com/stdlib-js/stdlib/commit/5eded9427070a00c7e0eaaab81962a049b574b2a) - add `replaceBefore` to namespace
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99) - remove CLI
-   [`5ca19d4`](https://github.com/stdlib-js/stdlib/commit/5ca19d4a12875d19a6b5b56e25ecd95bb224bbff) - add utility to replace a substring before the first occurrence of a search string
-   [`ae68d17`](https://github.com/stdlib-js/stdlib/commit/ae68d1783e4d97a36bc6a74d8cbe8004dae79ad2) - add support for replacing the substring before the first occurrence of a search string [(#843)](https://github.com/stdlib-js/stdlib/pull/843)

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111)
-   [`208fac6`](https://github.com/stdlib-js/stdlib/commit/208fac63ffd1075be3419af50d34cf505898854b) - make CLI executable
-   [`ca62bd1`](https://github.com/stdlib-js/stdlib/commit/ca62bd103c72e1e33d735bfc836824b128f69a0e) - make CLI executable
-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - set correct package names and descriptions
-   [`0db467b`](https://github.com/stdlib-js/stdlib/commit/0db467baee5053532d47ea4721870b0ebbaf7831) - correctly parse strings with hyphens in constantcase [(#1022)](https://github.com/stdlib-js/stdlib/pull/1022)

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1): update minimum TypeScript version
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99): remove CLI

    -   This is a \"base\" package, and thus should not normally have a CLI.
        The CLI has moved to `@stdlib/string/replace-before`. Users relying
        on the CLI should migrate to using that package.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

A total of 6 issues were closed in this release:

[#811](https://github.com/stdlib-js/stdlib/issues/811), [#849](https://github.com/stdlib-js/stdlib/issues/849), [#851](https://github.com/stdlib-js/stdlib/issues/851), [#853](https://github.com/stdlib-js/stdlib/issues/853), [#855](https://github.com/stdlib-js/stdlib/issues/855), [#1017](https://github.com/stdlib-js/stdlib/issues/1017)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`10c1b70`](https://github.com/stdlib-js/stdlib/commit/10c1b70a1be8a880f8010585c4c9f62468bfb314) - **refactor:** avoid creating a dictionary array _(by Athan Reines)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`bf2cf8b`](https://github.com/stdlib-js/stdlib/commit/bf2cf8b0424e608a4e3abb6d18a8b44d790aa99c) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`f9c75ce`](https://github.com/stdlib-js/stdlib/commit/f9c75ce726ed4e5fade8622315bb98094dad8561) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_
-   [`a9a8752`](https://github.com/stdlib-js/stdlib/commit/a9a87522c82e30e15888be884301a1359d758f68) - **docs:** update namespace table of contents [(#1124)](https://github.com/stdlib-js/stdlib/pull/1124) _(by stdlib-bot, Athan Reines)_
-   [`7faffe3`](https://github.com/stdlib-js/stdlib/commit/7faffe325bbf186b14c3dfef621e9d4cc56b47ff) - **feat:** update namespace TypeScript declarations [(#1122)](https://github.com/stdlib-js/stdlib/pull/1122) _(by stdlib-bot, Athan Reines)_
-   [`de17736`](https://github.com/stdlib-js/stdlib/commit/de1773601713083ef826105a70df23c8750f9559) - **feat:** refactor `string/reverse` and add `mode` option [(#1082)](https://github.com/stdlib-js/stdlib/pull/1082) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`ff35f38`](https://github.com/stdlib-js/stdlib/commit/ff35f3846e467adce5c8244342a04e2fd4a2ac84) - **fix:** make CLI scripts executable [(#1111)](https://github.com/stdlib-js/stdlib/pull/1111) _(by stdlib-bot, Philipp Burckhardt)_
-   [`4f2310d`](https://github.com/stdlib-js/stdlib/commit/4f2310de3494fe36f4b74db309593f63e9d24dcc) - **docs:** update namespace table of contents  [(#1102)](https://github.com/stdlib-js/stdlib/pull/1102 ) _(by stdlib-bot)_
-   [`982de75`](https://github.com/stdlib-js/stdlib/commit/982de7581326be5be20dda30103779ac5ae5767f) - **feat:** refactor `string/remove-last` [(#1079)](https://github.com/stdlib-js/stdlib/pull/1079) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`4d7c4c3`](https://github.com/stdlib-js/stdlib/commit/4d7c4c3bae220fd1c485e041bc28de539ddf443b) - **test:** resolve lint errors _(by Philipp Burckhardt)_
-   [`208fac6`](https://github.com/stdlib-js/stdlib/commit/208fac63ffd1075be3419af50d34cf505898854b) - **fix:** make CLI executable _(by Athan Reines)_
-   [`ca62bd1`](https://github.com/stdlib-js/stdlib/commit/ca62bd103c72e1e33d735bfc836824b128f69a0e) - **fix:** make CLI executable _(by Athan Reines)_
-   [`de73ae1`](https://github.com/stdlib-js/stdlib/commit/de73ae19f43cbad40036d25b1d46620b3c5113a9) - **feat:** update namespace TypeScript declarations [(#1089)](https://github.com/stdlib-js/stdlib/pull/1089) _(by stdlib-bot, Athan Reines, Philipp Burckhardt)_
-   [`a92aae0`](https://github.com/stdlib-js/stdlib/commit/a92aae06191187aa30abc3213a14e997abda032c) - **docs:** update namespace table of contents [(#1091)](https://github.com/stdlib-js/stdlib/pull/1091) _(by stdlib-bot, Athan Reines)_
-   [`1b163e9`](https://github.com/stdlib-js/stdlib/commit/1b163e9c6c6d81533a9418206e349df3bfca3858) - **style:** resolve lint errors _(by Philipp Burckhardt)_
-   [`3573d92`](https://github.com/stdlib-js/stdlib/commit/3573d92955f1150eae58fb534808b7a30532a1c1) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`d52e01c`](https://github.com/stdlib-js/stdlib/commit/d52e01c4a23d0a52ecacab0f16b663383dba96b7) - **feat:** add `removeFirst*` packages to namespace _(by Athan Reines)_
-   [`bf4e05f`](https://github.com/stdlib-js/stdlib/commit/bf4e05feb7de7529b88deea1aa9fb337b014f2c1) - **docs:** update namespace table of contents [(#1078)](https://github.com/stdlib-js/stdlib/pull/1078) _(by stdlib-bot, Athan Reines)_
-   [`d1ded85`](https://github.com/stdlib-js/stdlib/commit/d1ded8522b3ef71491fd262ec2157dd198dff1ac) - **feat:** add \"base\" string packages and refactor `string/remove-first` [(#1073)](https://github.com/stdlib-js/stdlib/pull/1073) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`9212514`](https://github.com/stdlib-js/stdlib/commit/9212514cd0ba9a681c2ca86ebe2fd3b61f866b64) - **fix:** set correct package names and descriptions _(by Philipp Burckhardt)_
-   [`ab5d324`](https://github.com/stdlib-js/stdlib/commit/ab5d324b547870938b21ebdeecc1f7fda132f321) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`6c7e770`](https://github.com/stdlib-js/stdlib/commit/6c7e770dab6e03561202af2861ae11c27af8a90c) - **refactor:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`6dcf3b0`](https://github.com/stdlib-js/stdlib/commit/6dcf3b00b8e5b807081c6539498f8d8303ff6cef) - **chore:** resolve lint errors _(by Philipp Burckhardt)_
-   [`89910da`](https://github.com/stdlib-js/stdlib/commit/89910daae54261b8fd21ee548b1a608aa0c65f12) - **feat:** update namespace TypeScript declarations [(#1068)](https://github.com/stdlib-js/stdlib/pull/1068) _(by stdlib-bot, Athan Reines)_
-   [`3f6961f`](https://github.com/stdlib-js/stdlib/commit/3f6961f8c70f58b497eab2fa4326c1edb0ddf23f) - **docs:** update namespace table of contents [(#1064)](https://github.com/stdlib-js/stdlib/pull/1064) _(by stdlib-bot, Athan Reines)_
-   [`f64cbb8`](https://github.com/stdlib-js/stdlib/commit/f64cbb84ef5c272ce3c224eb2cc7f89236ee6984) - **feat:** add `headercase` to namespace _(by Athan Reines)_
-   [`c85038d`](https://github.com/stdlib-js/stdlib/commit/c85038d939b199a48e9d5fbf4e6dfe52aa890842) - **feat:** add `string/headercase` _(by Athan Reines)_
-   [`dd850de`](https://github.com/stdlib-js/stdlib/commit/dd850deb48f3960744f525907c98cce43cf3201a) - **docs:** update descriptions _(by Athan Reines)_
-   [`c840141`](https://github.com/stdlib-js/stdlib/commit/c84014167a723c21684b272b2829b31f5041d3d2) - **test:** update test descriptions _(by Athan Reines)_
-   [`5a3f1dc`](https://github.com/stdlib-js/stdlib/commit/5a3f1dce13c231f15976a3a0ccb93b83b47a99e6) - **docs:** update namespace table of contents [(#1058)](https://github.com/stdlib-js/stdlib/pull/1058) _(by stdlib-bot, Athan Reines)_
-   [`d45fe04`](https://github.com/stdlib-js/stdlib/commit/d45fe043ac91aa3e47a40009d555e733084826b1) - **docs:** update option description _(by Athan Reines)_
-   [`49420b4`](https://github.com/stdlib-js/stdlib/commit/49420b4141462aa9c6092372b7625d73684dbbf2) - **docs:** update option description _(by Athan Reines)_
-   [`f3231b0`](https://github.com/stdlib-js/stdlib/commit/f3231b0e70d339f63e696b3a6033ea4680d887e5) - **docs:** update description _(by Athan Reines)_
-   [`7b40aec`](https://github.com/stdlib-js/stdlib/commit/7b40aec59bb7ccb9c78db6966520ee575fcd9763) - **docs:** fix grammar in description _(by Athan Reines)_
-   [`f0b5cd7`](https://github.com/stdlib-js/stdlib/commit/f0b5cd7546a492a78d24b0a62f9a7eb78ca6cb1a) - **docs:** fix grammar _(by Athan Reines)_
-   [`adc9087`](https://github.com/stdlib-js/stdlib/commit/adc90876033ca1a9cffd4090118288fbeb85470b) - **docs:** fix grammar _(by Athan Reines)_
-   [`fc6156d`](https://github.com/stdlib-js/stdlib/commit/fc6156deddcbbd350bbb9eb01a8e4a1a9227f2bd) - **feat:** add support for specifying the iteration mode _(by Athan Reines)_
-   [`288c5b1`](https://github.com/stdlib-js/stdlib/commit/288c5b1164860e3f3019b56f98e505b74a8fe4f3) - **test:** add test case _(by Athan Reines)_
-   [`2249ebe`](https://github.com/stdlib-js/stdlib/commit/2249ebe4f478f70f2b6869025caacc5efa59ea45) - **chore:** update keywords _(by Athan Reines)_
-   [`1389946`](https://github.com/stdlib-js/stdlib/commit/13899464bcfa46098af5ed215df3e3c05129c7a6) - **feat:** add `forEach` to namespace _(by Athan Reines)_
-   [`bc8bdba`](https://github.com/stdlib-js/stdlib/commit/bc8bdba5e90f81bed942f5f0114c6373d323f9b6) - **feat:** add `string/base/for-each` _(by Athan Reines)_
-   [`79a604d`](https://github.com/stdlib-js/stdlib/commit/79a604d904a41885af2e048912937bef89bdde55) - **docs:** fix descriptions _(by Athan Reines)_
-   [`b0d3470`](https://github.com/stdlib-js/stdlib/commit/b0d3470781ce2fe5229f6a50dfe2e277b90ec111) - **style:** add missing line _(by Athan Reines)_
-   [`e8bce95`](https://github.com/stdlib-js/stdlib/commit/e8bce95d60ff3e7b4b3ee7891526b3bdebbf2409) - **style:** add missing line _(by Athan Reines)_
-   [`fa11844`](https://github.com/stdlib-js/stdlib/commit/fa11844d487be4eee7698a754bc082461f40edeb) - **style:** add missing line _(by Athan Reines)_
-   [`40a968d`](https://github.com/stdlib-js/stdlib/commit/40a968d5120fd9f5511a8c719098910fe07175db) - **docs:** fix descriptions _(by Athan Reines)_
-   [`50bb3f1`](https://github.com/stdlib-js/stdlib/commit/50bb3f12bdba45c8fa4cf523592748757a80f69b) - **docs:** fix descriptions _(by Athan Reines)_
-   [`b7b1102`](https://github.com/stdlib-js/stdlib/commit/b7b1102d386a4373c44ed1d2049dbb0a1b100a88) - **docs:** fix descriptions _(by Athan Reines)_
-   [`99dd3ee`](https://github.com/stdlib-js/stdlib/commit/99dd3ee226954fd4f2b5ecb57f8ed2a39677efc6) - **bench:** update assertions _(by Athan Reines)_
-   [`ed5abeb`](https://github.com/stdlib-js/stdlib/commit/ed5abeb8355e9798b95976f8e89120d022396e17) - **feat:** add `forEachCodePoint` to namespace _(by Athan Reines)_
-   [`a145df2`](https://github.com/stdlib-js/stdlib/commit/a145df2c49fe0ba4872b0c8cac588a0033db355a) - **feat:** add `string/base/for-each-code-point` _(by Athan Reines)_
-   [`124209c`](https://github.com/stdlib-js/stdlib/commit/124209c4735b689d1a75b4d79ad14666c7431f8a) - **docs:** fix comment _(by Athan Reines)_
-   [`89e9ca9`](https://github.com/stdlib-js/stdlib/commit/89e9ca9cf580d617fef90a4abf6c9bba45f0f40a) - **test:** inline expected value _(by Athan Reines)_
-   [`1b8d401`](https://github.com/stdlib-js/stdlib/commit/1b8d401959a90b8dac6c0ebb139d009800f4c9d2) - **feat:** add `forEachGraphemeCluster` to namespace _(by Athan Reines)_
-   [`b574ced`](https://github.com/stdlib-js/stdlib/commit/b574cede2f83be2615a5227ba57fea7fd603645a) - **feat:** add `string/base/for-each-grapheme-cluster` _(by Athan Reines)_
-   [`b948017`](https://github.com/stdlib-js/stdlib/commit/b94801771b8397a0e6577e3979cc3fdb4428645f) - **docs:** update examples and copy _(by Athan Reines)_
-   [`712793f`](https://github.com/stdlib-js/stdlib/commit/712793f4d347e91af599c8c7eef12809afde5282) - **docs:** update description _(by Athan Reines)_
-   [`da95ea4`](https://github.com/stdlib-js/stdlib/commit/da95ea4abd305b5e2b26a4afe494a2a5c020a67f) - **test:** refactor and add additional tests _(by Athan Reines)_
-   [`0c7b412`](https://github.com/stdlib-js/stdlib/commit/0c7b412433ea3fbf94113df38bbc69e6e7a42522) - **docs:** update descriptions _(by Athan Reines)_
-   [`3a533b3`](https://github.com/stdlib-js/stdlib/commit/3a533b38569f191cf46e7c72380fe513139ff67b) - **docs:** update example and extended description _(by Athan Reines)_
-   [`262a07b`](https://github.com/stdlib-js/stdlib/commit/262a07b5904884349c40d86682f76b9b5224450e) - **feat:** add type definitions for provided callback _(by Athan Reines)_
-   [`88aa0b5`](https://github.com/stdlib-js/stdlib/commit/88aa0b5dc1e47f79edad2f10ae2487614cf6e9d7) - **bench:** fix benchmark logic _(by Athan Reines)_
-   [`c5b10c6`](https://github.com/stdlib-js/stdlib/commit/c5b10c61bf0781fa24eaf08a5084af1df743f06b) - **docs:** update examples and fix test case _(by Athan Reines)_
-   [`0b65262`](https://github.com/stdlib-js/stdlib/commit/0b652621e5ec7c1644b0c96d541bb8ea9f6f9fd3) - **refactor:** simplify implementation _(by Athan Reines)_
-   [`94e0f38`](https://github.com/stdlib-js/stdlib/commit/94e0f38720226a560a563f48c5bbfcf7a2925109) - **feat:** add support for specifying the type of characters to return _(by Athan Reines)_
-   [`5b937c7`](https://github.com/stdlib-js/stdlib/commit/5b937c7b02cdb1cf1fe05d69ea6e3833974341bc) - **docs:** update descriptions _(by Athan Reines)_
-   [`5a63be9`](https://github.com/stdlib-js/stdlib/commit/5a63be98ae693437705cf899e9b60d95e021c355) - **docs:** update namespace table of contents [(#1050)](https://github.com/stdlib-js/stdlib/pull/1050) _(by stdlib-bot, Athan Reines)_
-   [`810ebc1`](https://github.com/stdlib-js/stdlib/commit/810ebc1b4d4b5eaf023f5281774e54db733bb4e0) - **feat:** update namespace TypeScript declarations [(#1047)](https://github.com/stdlib-js/stdlib/pull/1047) _(by stdlib-bot, Athan Reines)_
-   [`8758d21`](https://github.com/stdlib-js/stdlib/commit/8758d213498f06bd26e770991724c59b3485ffbb) - **feat:** add `distances` to namespace _(by Athan Reines)_
-   [`bc8f74c`](https://github.com/stdlib-js/stdlib/commit/bc8f74c639792f47f1af2d36831bcbafeb85054a) - **feat:** add `first`, `firstCodePoint`, and `firstGraphemeCluster` to namespace _(by Athan Reines)_
-   [`71e5de2`](https://github.com/stdlib-js/stdlib/commit/71e5de2d7187757ba15043cffac77385d9d6e0aa) - **feat:** add `string/base/first-grapheme-cluster` _(by Athan Reines)_
-   [`c80f976`](https://github.com/stdlib-js/stdlib/commit/c80f97615bfc29e0fcc0b0cf1d70d0240b5191f5) - **feat:** add `string/base/first-code-point` _(by Athan Reines)_
-   [`cfdd473`](https://github.com/stdlib-js/stdlib/commit/cfdd47366d9599c07ab27e3886de66ec76f7591c) - **feat:** add `string/base/first` _(by Athan Reines)_
-   [`26da930`](https://github.com/stdlib-js/stdlib/commit/26da93023689061a88bfa795d4d83e3cfa3c5a24) - **refactor:** use base array utility _(by Athan Reines)_
-   [`055d0c6`](https://github.com/stdlib-js/stdlib/commit/055d0c64d556ac2c621488d293813a84e9b0a73c) - **feat:** add `dotspace` _(by Athan Reines)_
-   [`787a967`](https://github.com/stdlib-js/stdlib/commit/787a96729d083686118fe049a023526791063d28) - **feat:** add `string/dotcase` _(by Athan Reines)_
-   [`9d12c26`](https://github.com/stdlib-js/stdlib/commit/9d12c26933347bf9d0b49e3168febbd4920403d6) - **docs:** add empty section _(by Athan Reines)_
-   [`adf617e`](https://github.com/stdlib-js/stdlib/commit/adf617e1d83b6089ac2b5773e9b36749d6435717) - **docs:** remove redundant example _(by Athan Reines)_
-   [`7b3a790`](https://github.com/stdlib-js/stdlib/commit/7b3a7908dcc38d281a50fd59b6fb38733103ec71) - **docs:** fix example _(by Athan Reines)_
-   [`b78482b`](https://github.com/stdlib-js/stdlib/commit/b78482bf2f133e63ec98faf62b436465ed153c25) - **refactor:** inline logic and use computed variable _(by Athan Reines)_
-   [`93666bc`](https://github.com/stdlib-js/stdlib/commit/93666bca6baa7bb2c1b8605661cbf3f8da48b8a9) - **style:** remove linebreak _(by Athan Reines)_
-   [`33d5a3b`](https://github.com/stdlib-js/stdlib/commit/33d5a3bc76e8e67cb34dabe93e6882e7a978899a) - **refactor:** fix error messages _(by Athan Reines)_
-   [`a6aa492`](https://github.com/stdlib-js/stdlib/commit/a6aa492c8ed73b06e4261ed8cc13a9d8254f79ed) - **docs:** update examples to match file and update copy _(by Athan Reines)_
-   [`b9d91dc`](https://github.com/stdlib-js/stdlib/commit/b9d91dc7165b9d4ef378ee6dbfec45085802be58) - **test:** update descriptions _(by Athan Reines)_
-   [`c1b5fa9`](https://github.com/stdlib-js/stdlib/commit/c1b5fa92b6c9cdd5a0b20aab427fea36548209f1) - **docs:** update test descriptions _(by Athan Reines)_
-   [`5aad242`](https://github.com/stdlib-js/stdlib/commit/5aad24250baf2efa14f33ebfde920140550c3e47) - **style:** remove extra line _(by Athan Reines)_
-   [`c81313e`](https://github.com/stdlib-js/stdlib/commit/c81313e89ab1a547956041ebcd0bce5eb74dfa49) - **docs:** update namespace table of contents [(#1046)](https://github.com/stdlib-js/stdlib/pull/1046) _(by stdlib-bot, Athan Reines)_
-   [`efef313`](https://github.com/stdlib-js/stdlib/commit/efef313d4ab609f887bdb93083e244fd32a45290) - **docs:** update namespace table of contents [(#1045)](https://github.com/stdlib-js/stdlib/pull/1045) _(by stdlib-bot, Athan Reines)_
-   [`421e1ae`](https://github.com/stdlib-js/stdlib/commit/421e1ae86e3d7fb31d156af9cd522303a6645220) - **feat:** update namespace TypeScript declarations [(#1044)](https://github.com/stdlib-js/stdlib/pull/1044) _(by stdlib-bot, Athan Reines)_
-   [`75c52a3`](https://github.com/stdlib-js/stdlib/commit/75c52a3d1b7946c8ec9d3209f2d28054f0441d77) - **feat:** add `forEach` to namespace _(by Athan Reines)_
-   [`ab8801a`](https://github.com/stdlib-js/stdlib/commit/ab8801abb8c86b3ef07a242382db9ef1d8b76cbc) - **docs:** update example and remove comments _(by Athan Reines)_
-   [`cdc1523`](https://github.com/stdlib-js/stdlib/commit/cdc15235766db5a76760304a90608927f4a63823) - **docs:** update examples and remove comments _(by Athan Reines)_
-   [`e61ced4`](https://github.com/stdlib-js/stdlib/commit/e61ced47a6173cea01a25655e103d930eb9f09a5) - **docs:** update examples and copy _(by Athan Reines)_
-   [`6d01566`](https://github.com/stdlib-js/stdlib/commit/6d01566f6546dfdc3ac393fe584659c203dbad3e) - **feat:** add `first` to namespace _(by Athan Reines)_
-   [`8ea4115`](https://github.com/stdlib-js/stdlib/commit/8ea4115e5c1de0178360436d6448372fb581f9ac) - **refactor:** remove unnecessary branches _(by Athan Reines)_
-   [`ed9f6c1`](https://github.com/stdlib-js/stdlib/commit/ed9f6c1c7284f834e71d4786d4bd628a9408041a) - **test:** update test description _(by Athan Reines)_
-   [`e4d6bf9`](https://github.com/stdlib-js/stdlib/commit/e4d6bf96baad0e964fa758c9b71ae1180be3b270) - **docs:** update copy _(by Athan Reines)_
-   [`f9f53be`](https://github.com/stdlib-js/stdlib/commit/f9f53bea3148c9d0f12fd3dc8bb25226162a6311) - **test:** update test descriptions and assertion messages _(by Athan Reines)_
-   [`38eff0a`](https://github.com/stdlib-js/stdlib/commit/38eff0a4fb0fd501186f92872f95879fe975f3a8) - **docs:** fix parameter description _(by Athan Reines)_
-   [`1dda021`](https://github.com/stdlib-js/stdlib/commit/1dda0213620cc1b32f7dd7343bbc93a41fec7394) - **docs:** fix copyright year _(by Athan Reines)_
-   [`78506c7`](https://github.com/stdlib-js/stdlib/commit/78506c753f8dd3a5b9de371abb01f354ede317ad) - **docs:** fix imports _(by Athan Reines)_
-   [`0e987b6`](https://github.com/stdlib-js/stdlib/commit/0e987b6fde52d7ef3060f8a47ed25573644025a5) - **feat:** update namespace _(by Athan Reines)_
-   [`1da2118`](https://github.com/stdlib-js/stdlib/commit/1da2118d4b05a19e5c67bf34943004da43bc92ea) - **docs:** update examples to avoid `for` loop _(by Athan Reines)_
-   [`449007f`](https://github.com/stdlib-js/stdlib/commit/449007f13354d6845f07003470757afb32c746c4) - **refactor:** use base package _(by Athan Reines)_
-   [`e2f0029`](https://github.com/stdlib-js/stdlib/commit/e2f00295734722639117d148b518ab9480dabb28) - **docs:** fix variable name in example _(by Athan Reines)_
-   [`52e7d18`](https://github.com/stdlib-js/stdlib/commit/52e7d18fbd15d5e902bb944a7486323aac19ada7) - **docs:** refactor example to avoid `for` loop _(by Athan Reines)_
-   [`2dca659`](https://github.com/stdlib-js/stdlib/commit/2dca659781d39918edce23ee741fad6d01d91849) - **feat:** add `@stdlib/string/base/headercase` [(#1039)](https://github.com/stdlib-js/stdlib/pull/1039) _(by Roman Stetsyk)_
-   [`55e5756`](https://github.com/stdlib-js/stdlib/commit/55e57561273881a0e5bb1b35489a4801f0d059b6) - **chore:** fix package meta data indentation [(#1033)](https://github.com/stdlib-js/stdlib/pull/1033) _(by stdlib-bot, Athan Reines)_
-   [`fb10080`](https://github.com/stdlib-js/stdlib/commit/fb100802c35339f6a5fafe6a0a88f28658eb5bbe) - **feat:** add `string/for-each` [(#1027)](https://github.com/stdlib-js/stdlib/pull/1027) _(by Naresh Jagadeesan)_
-   [`223eb98`](https://github.com/stdlib-js/stdlib/commit/223eb983e3ed03c4927fdd30aad6d1d52813c699) - **feat:** update namespace TypeScript declarations _(by stdlib-bot, Planeshifter)_
-   [`c40a139`](https://github.com/stdlib-js/stdlib/commit/c40a1396adb204bf1f9c6d550d99884a8004b424) - **feat:** add `string/base/distances/levenshtein` [(#1030)](https://github.com/stdlib-js/stdlib/pull/1030 ) _(by Naresh Jagadeesan)_
-   [`cc26fd2`](https://github.com/stdlib-js/stdlib/commit/cc26fd22d6ee10cec6fb22a87352e9f94a5fa803) - **feat:** add `string/first` [(#989)](https://github.com/stdlib-js/stdlib/pull/989) _(by Yernar Yergaziyev, Athan Reines, Philipp Burckhardt)_
-   [`0db467b`](https://github.com/stdlib-js/stdlib/commit/0db467baee5053532d47ea4721870b0ebbaf7831) - **fix:** correctly parse strings with hyphens in constantcase [(#1022)](https://github.com/stdlib-js/stdlib/pull/1022) _(by Roman Stetsyk)_
-   [`857646f`](https://github.com/stdlib-js/stdlib/commit/857646f2545aa881c816b8040621225a9b9e6a27) - **feat:** add base package to right pad a string _(by Philipp Burckhardt)_
-   [`dace169`](https://github.com/stdlib-js/stdlib/commit/dace169a8a53022f0ffcabf4084f61a7f0f49a8f) - **docs:** update namespace table of contents [(#986)](https://github.com/stdlib-js/stdlib/pull/986) _(by stdlib-bot, Athan Reines)_
-   [`e34d9a0`](https://github.com/stdlib-js/stdlib/commit/e34d9a09e864d8f25460974f6e3e4eb3b03ea6a2) - **docs:** update namespace TypeScript declarations [(#984)](https://github.com/stdlib-js/stdlib/pull/984) _(by stdlib-bot, Athan Reines)_
-   [`a7d8f42`](https://github.com/stdlib-js/stdlib/commit/a7d8f429e9058cebfb4931309d5712b05f8c7931) - **feat:** add `invcase` to namespace _(by Athan Reines)_
-   [`93025bc`](https://github.com/stdlib-js/stdlib/commit/93025bc4fda5a8aec0a9661b8b6fc592464e791a) - **docs:** update copyright year _(by Athan Reines)_
-   [`93aca6c`](https://github.com/stdlib-js/stdlib/commit/93aca6cb37c64fdd4cc92fe0405968699bc5e520) - **feat:** add `string/base/invcase` [(#974)](https://github.com/stdlib-js/stdlib/pull/974) _(by Yernar Yergaziyev, Yernar Yergaziyev, Athan Reines)_
-   [`e8775fc`](https://github.com/stdlib-js/stdlib/commit/e8775fcbe3617b9013bd1cea74d7f70aa2669ab4) - **feat:** update namespace TypeScript declarations [(#951)](https://github.com/stdlib-js/stdlib/pull/951) _(by stdlib-bot, Athan Reines)_
-   [`d60f27b`](https://github.com/stdlib-js/stdlib/commit/d60f27bfaaf3d9d2ee406a8bea9436a00809f699) - **docs:** update namespace table of contents [(#930)](https://github.com/stdlib-js/stdlib/pull/930) _(by stdlib-bot, Athan Reines)_
-   [`440034d`](https://github.com/stdlib-js/stdlib/commit/440034de6d7d057f3afb7399b6a3951dc0749c70) - **chore:** fix indentation in package meta data [(#928)](https://github.com/stdlib-js/stdlib/pull/928) _(by stdlib-bot, Athan Reines)_
-   [`1b01973`](https://github.com/stdlib-js/stdlib/commit/1b01973d99289aea9a94bbf6ab95d463b6436193) - **docs:** remove trailing space _(by Athan Reines)_
-   [`0036663`](https://github.com/stdlib-js/stdlib/commit/003666350dfb2618a59375991afda18b5914e1e5) - **feat:** add `replaceBefore` to namespace _(by Athan Reines)_
-   [`5eded94`](https://github.com/stdlib-js/stdlib/commit/5eded9427070a00c7e0eaaab81962a049b574b2a) - **feat:** add `replaceBefore` to namespace _(by Athan Reines)_
-   [`a7e60d8`](https://github.com/stdlib-js/stdlib/commit/a7e60d8aae80fa67f961db4221263782edc89f99) - **feat:** remove CLI _(by Athan Reines)_
-   [`5ca19d4`](https://github.com/stdlib-js/stdlib/commit/5ca19d4a12875d19a6b5b56e25ecd95bb224bbff) - **feat:** add utility to replace a substring before the first occurrence of a search string _(by Athan Reines)_
-   [`35622d7`](https://github.com/stdlib-js/stdlib/commit/35622d74bcfebc1cd92859618f5f3bf0dcd29003) - **refactor:** clean-up implementation, tests, and docs _(by Athan Reines)_
-   [`ae68d17`](https://github.com/stdlib-js/stdlib/commit/ae68d1783e4d97a36bc6a74d8cbe8004dae79ad2) - **feat:** add support for replacing the substring before the first occurrence of a search string [(#843)](https://github.com/stdlib-js/stdlib/pull/843) _(by Harshita Kalani, Athan Reines, Pranav)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 9 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Harshita Kalani
-   Naresh Jagadeesan
-   Philipp Burckhardt
-   Planeshifter
-   Pranav Goswami
-   Roman Stetsyk
-   Stephannie Jiménez Gacha
-   Yernar Yergaziyev

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.14">

## 0.0.14 (2022-07-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.13">

## 0.0.13 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.12">

## 0.0.12 (2021-07-09)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.11">

## 0.0.11 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.10">

## 0.0.10 (2021-06-27)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.9">

## 0.0.9 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.8">

## 0.0.8 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.7">

## 0.0.7 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2021-06-14)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-06-13)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-12)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-10)

No changes reported for this release.

</section>

<!-- /.release -->

