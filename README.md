# Bank of America Dashboard - Angular 14 → 18 Upgrade Demo

This Angular 14 application is intentionally broken with TypeScript compilation errors to demonstrate Devin's autonomous upgrade capabilities.

## Current State (BROKEN)

**Framework:** Angular 14.2.0 with TypeScript 4.7.2

**The Problem:** The application fails to compile due to TypeScript compatibility issues:
- 50+ compilation errors related to `Symbol.dispose`, `Symbol.asyncDispose`, and `Disposable` interfaces
- `@types/node@24.10.0` includes newer ECMAScript features not supported by TypeScript 4.7.2
- `tsconfig.json` missing required library configurations for modern disposable patterns
- Version mismatch between dependencies and TypeScript target

```bash
npm start
# Result: Failed to compile with 50+ TypeScript errors
```

## Features (When Working)

- **Dashboard Component** - Account summaries with balance calculations
- **Angular Material** - Material Design button components  
- **Enterprise Patterns** - Property binding, lifecycle hooks, array operations
- **Minimal Dependencies** - Clean structure for upgrade testing

## The Challenge for Devin

**Goal:** Upgrade this Angular 14 application to Angular 18 and resolve all compilation errors.

**Expected Tasks:**
1. **Framework Upgrade**: Angular 14 → 18 (includes TypeScript 4.7 → 5.4+)
2. **Dependency Resolution**: Update all Angular packages and peer dependencies
3. **TypeScript Configuration**: Fix `tsconfig.json` lib settings for modern ECMAScript features
4. **Compatibility Issues**: Resolve `@types/node` version conflicts
5. **Verification**: Ensure application compiles and runs successfully

**Success Criteria:**
- `npm start` runs without compilation errors
- Application loads at http://localhost:4200
- Dashboard displays account information correctly
- All Angular 18 features properly configured

## Development Commands

```bash
# Install dependencies (currently fails to compile)
npm install

# Start development server (currently broken)
npm start

# Build for production (currently broken) 
npm run build
```

## Demo Scenario

This represents a realistic enterprise upgrade scenario where:
- Legacy Angular 14 codebase needs modernization
- TypeScript compatibility issues block development
- Automated tooling (Devin) must navigate complex dependency chains
- Real-world enterprise patterns require careful migration

Perfect for demonstrating autonomous upgrade capabilities in a controlled environment.