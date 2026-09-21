# Contact form: messages sent but no email arriving

## What we know

The form reports success, which means the email service accepted the submission. So the form itself is reaching the service; the message is getting lost between the service and the inbox.

Three realistic causes, in order of likelihood:

1. The email is arriving but landing in spam/junk, or being filtered because the sender address is the service's own address rather than yours.
2. The email service account (Web3Forms) has the submissions but is no longer delivering them: unverified inbox address, changed email on the account, or the free monthly quota reached.
3. The submission is being stored under a different/disabled access key than the one in the site.

## What to check first (no code change needed)

- Search the mailbox for messages from `web3forms` (including spam, junk and any filter rules).
- Sign in at web3forms.com and open the Submissions list. If the test messages appear there, delivery is the problem (inbox address or quota), not the website. If they do not appear, the access key used by the site no longer belongs to that account and a new key is needed.

## What to change on the site

Regardless of the outcome above, the submission is currently sent with the bare minimum of information, which hurts deliverability and makes it hard to see what went wrong. Improvements:

- Give every submission a clear subject line ("New enquiry from the Sustavision website") and a sender name, so the email is recognisable and less likely to be filtered.
- Set the visitor's address as the reply-to address, so replying works directly.
- Add the standard hidden anti-spam field the service expects.
- Show the service's own error text in the failure message instead of a generic one, and treat a non-success reply as a failure even when the request itself went through.

If the Submissions list turns out to be empty, the fix is a fresh access key from the Web3Forms account, which then replaces the current one on the contact page.

## Technical notes

- File: `src/pages/Contact.tsx`, `handleSubmit`.
- Send the payload as JSON with `Content-Type` and `Accept: application/json` (Web3Forms' recommended path) instead of raw `FormData`.
- Fields added: `subject`, `from_name`, `replyto`, plus a `botcheck` honeypot rendered hidden in the form.
- Keep the existing toast copy keys (`t.contact.success` / `error`); append `result.message` to the error description when present.
- Console-log the parsed response on failure so the exact service reply is visible in the browser console during testing.
- No change to the translations, layout, styling or the rest of the page.
