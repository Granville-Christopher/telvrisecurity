# Telvri Security SDKs

Auto-generated client libraries from the live OpenAPI contract.

## Regenerate

```bash
# Refresh spec from production
npm run sdk:fetch-spec

# Generate all SDKs
npm run sdk:generate
```

This creates or updates:

| Language | Folder | Package |
|----------|--------|---------|
| JavaScript/TypeScript | `sdks/javascript` | `@telvri/security` → [Granville-Christopher/telvri-js](https://github.com/Granville-Christopher/telvri-js) |
| Python | `sdks/python` | `telvri-security` |
| Go | `sdks/go` | `github.com/Granville-Christopher/telvri-go` |
| PHP | `sdks/php` | `telvri/security` |
| Ruby | `sdks/ruby` | `telvri_security` |
| Java | `sdks/java` | `com.telvri:security` → [Granville-Christopher/telvri-java](https://github.com/Granville-Christopher/telvri-java) (JitPack) |
| .NET | `sdks/dotnet` | `Telvri.Security` |

API base URL is injected into `openapi.json` as `https://telvrisecurity.vercel.app` before generation.

## Publish (after you own the registry accounts)

### npm

```bash
cd sdks/javascript
npm install
npm run build
npm publish --access public
```

### PyPI

```bash
cd sdks/python
python -m pip install build twine
python -m build
twine upload dist/*
```

### Go

```bash
npm run sdk:generate:go
# then publish sdks/go to github.com/Granville-Christopher/telvri-go and tag v1.0.0
```

```bash
go get github.com/Granville-Christopher/telvri-go@v1.0.0
```

### PHP (Packagist)

Push `sdks/php` to GitHub, then register the repo on Packagist.

### RubyGems

```bash
cd sdks/ruby
gem build telvri_security.gemspec
gem push telvri_security-1.0.0.gem
```

### Java (JitPack / Maven Central)

```bash
npm run sdk:generate:java
# publish sdks/java to github.com/Granville-Christopher/telvri-java and tag v1.0.0
```

Install via JitPack:

```gradle
implementation 'com.github.Granville-Christopher:telvri-java:v1.0.0'
```

Maven Central (`com.telvri:security`) can be added later with Sonatype OSSRH credentials.

### NuGet

```bash
cd sdks/dotnet
dotnet pack src/Telvri.Security/Telvri.Security.csproj
dotnet nuget push src/Telvri.Security/bin/Release/Telvri.Security.1.0.0.nupkg --api-key <key> --source https://api.nuget.org/v3/index.json
```

## Notes

- Generated code is overwritten on each `npm run sdk:generate`.
- Customize branding or helper wrappers in a thin layer above these clients, not inside generated files.
- The SIM-swap endpoint lives under `SIMSwapIntelligenceApi` in each SDK.
