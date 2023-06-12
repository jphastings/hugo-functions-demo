# A demo Hugo site

This site is designed to be built by a [custom branch of Hugo](https://github.com/gohugoio/hugo/compare/master...jphastings:hugo:func-files) that allows for custom functions. The exported functions from `functions/*.ts` are available for use with the `external.Function` (aliased as `fn`) function, like so:

```go-template
{{ fn "hello.Name" "you" }} → Hello you!
```

The first argument is the `<filename>.<Function>`, so `hello.Name` will call the exported `Name` function from `functions/hello.ts`.

```go-template
{{ printf "This is a spoiler!" | fn "enc.Rot13" }} → Guvf vf n fcbvyre!
```

[More info here](https://github.com/jphastings/hugo/blob/34edf2c40ceeb7ae61b119123c124a40947077b1/docs/content/en/functions/external.md).
