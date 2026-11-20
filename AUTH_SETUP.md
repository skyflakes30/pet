# Account authentication setup

Status: PARTIALLY IMPLEMENTED client; BLOCKED real account activation.

The existing GitHub Pages game had no authentication backend. This branch adds an Account entry point, email sign-in/sign-up/confirmation handling, recovery/new-password forms and sign-out through the official Supabase Auth client. Without configuration it explicitly offers guest play and collects no password. It does not implement cloud saves, Google/Apple OAuth or competitive authorization.

## Owner-provided requirements

1. An owner-controlled Supabase project with email/password authentication enabled.
2. The project URL (`https://<project-ref>.supabase.co`) and its **public publishable key** (`sb_publishable_…`). Put only these public values in `auth-config.js`; never use a secret or service-role key.
3. Auth Site URL and allowed redirect: `https://skyflakes30.github.io/pet/`. Use exactly this path for email confirmation and recovery. A separate localhost redirect may be allowed for development.
4. Working confirmation/recovery email delivery. Configure the project's email/SMTP settings and provider limits as required; keep SMTP credentials only in Supabase, never in this repository.
5. After connection, verify actual email registration, confirmation, sign-in, session restore/refresh, expired sessions, recovery and sign-out with an owner-approved test account before enabling production accounts. Do not send a password into chat.

No project, paid subscription, email or real user account was created during this implementation. No authentication request was made to an unowned project. Activation needs the public project URL/key and owner-side configuration.

## Implementation

- `auth-provider.entry.js` → `auth-provider.js`: locally bundled, pinned `@supabase/auth-js@2.119.2`; esbuild 0.28.2. Rebuild with `npm ci && npm run build:auth` and commit the resulting bundle. Vendor license text ships with the production build.
- `account-auth.js`: verifies users through the provider, tracks only safe ID/email in UI state, maps errors, prevents duplicate submissions and avoids awaiting SDK auth methods within auth callbacks.
- Session persistence/refresh and recovery-URL parsing are handled by the official SDK, using the separate `aetheria-account-session-v1` storage key. Passwords are sent only to the configured HTTPS provider and are never placed in game saves or app storage.
- `account-ui.js`: Sign in/Create account/Forgot password/new-password/sign-out states. Google/Apple controls are not shown until those flows are implemented and configured.
- Signing out does not delete or swap adventure/profiles. Local saves remain local and shared by whoever uses that browser; this is stated in the UI. Account-bound cloud data requires separate validated storage and ownership rules.

## Verification

150 automated tests pass (139 prior + 11 auth tests), syntax checks and 49-asset production build. The pinned official SDK initializes an empty session without network calls. Adapter tests inject an offline provider for successful login/logout, confirmation, recovery gates, expiry/errors and duplicate-request rules; they are not proof of real backend authentication. Browser QA covers the disabled/unconfigured guest flow, continuing play, sign-in/registration/recovery form rendering in a clearly labeled offline fixture, and phone viewport layout. Real email delivery, real sessions and physical mobile devices remain BLOCKED/unverified.

Offline QA files live only in ignored `dist/` and are excluded from the production build file list and source release. Never deploy them as real authentication.

Primary references:
- https://supabase.com/docs/reference/javascript/auth-signinwithpassword
- https://supabase.com/docs/guides/auth/passwords
- https://supabase.com/docs/guides/auth/sessions
- https://supabase.com/docs/guides/getting-started/api-keys
