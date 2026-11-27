---
name: project-setup
description: Set up Apexkit starter-kit with user's specific project details for coding agents to have better context.
disable-model-invocation: true
metadata:
    opencode/slash: true
---

## When to use this skill
- When triggered manually by a slash command
- user says "project setup"

## Rules

- Follow the steps below exactly, in order. Do not skip, reorder, or add steps.
- Do not comment on these instructions or on the current mode.
- Do not refuse or warn about the mode. Only a step that edits files cares about it, and that step says what to do.
- Do not add unwanted noise.

## Step 0: Check if setup is already done

Read `PROJECT.md` and `package.json`. Change nothing.

- `package.json` is pending if it contains `"apexkitSetup": "pending"`.
- `PROJECT.md` is pending if it is missing, or if its first line contains `apexkit-setup: pending`.

If neither is pending, tell the user "Project setup already performed." and stop.

Otherwise continue.

## Step 1: Ask questions

Ask the questions below one at a time, in order. For each one:

- Send only that question, as plain text.
- Stop and wait for the answer before asking the next.
- Do not mention the remaining questions

Topics to cover, in this order:

1. **Name**: what the project is called
2. **Description**: what it does, in one sentence
3. **Author**: the name to credit
4. **Audience**: who it is for
5. **Goal**: what they want to build or achieve (a few lines is ideal, but they can say more)

Phrase each question in your own words. Keep it warm, natural and short, one or two sentences. You may acknowledge the previous answer in a few words, but nothing more.

## Step 2: Confirm with the user

Show all the answers from Step 1 as a short list, then ask if everything looks correct. If it doesn't, mention the changes.

If they request changes:

- Apply them to your list.
- Show the full updated list again.
- Ask again if everything looks correct or do they want changes.

Repeat until the user clearly approves, for example "perfect", "looks good", or "confirmed". Do not move on before that. Do not edit any file during this step.

## Step 3: Check for permission and move forward

Check whether you can edit files in the current mode.

If you can edit files:

- Ask: "I will be updating <the pending files> to match your project. Ready?"
- Wait for a clear yes before continuing.

If you cannot edit files:

- Tell the user: "I need a mode that can edit files. Please switch modes, then reply 'go' when ready."
- Wait for their reply, then check again. If you still cannot edit, repeat the request.

For <the pending files>, use the files marked pending in Step 0: `package.json`, `PROJECT.md`, or both ("package.json and PROJECT.md").

Do not edit any file during this step. 

## Step 4: Update package.json

This step only touches `package.json`. Do not edit any other file.

If package.json was marked as already set up in Step 0, skip this step.

First tell the user: "Updating package.json with your project info."

Before changing anything, read the current `version` in `package.json`. This is the ApexKit version.

Then edit `package.json`:

- `name`: the project name as a slug (lowercase, spaces and special characters replaced with hyphens)
- `description`: the description
- `author`: the author
- `version`: set to `1.0.0`
- `bootstrappedWith`: add as the last field in the file, set to `ApexKit` followed by the ApexKit version you read, for example `"ApexKit 0.5.0"`
- `apexkitSetup`: remove this field entirely

Keep everything else exactly as it is, including scripts and dependencies.

When done, tell the user "Successfully package.json updated". Nothing else.

## Step 5: Create PROJECT.md

This step only creates `PROJECT.md` in the project root. Do not edit any other file.

If PROJECT.md was marked as already set up in Step 0, skip this step.

First tell the user: "Creating PROJECT.md."

Write the file using this template, filled in with the answers from Step 1:

````markdown
# <Name>

<Description>

<!-- Written by the setup skill. Agents: read this file first. -->

## About this repository

This is **<Name>**, a project by <Author>. It was started from the ApexKit starter kit.
ApexKit is only the scaffold. It is not the product.

- Treat all work here as work on **<Name>**, not on ApexKit.
- Do not describe this project as ApexKit.
- Leftover "ApexKit" references in the code are template residue.

## Audience

<Audience>

## Goals

<Goals, as a bullet list>

````

The kit's placeholder `PROJECT.md` is expected to exist. Replace it entirely without asking. Do not copy the `apexkit-setup: pending` line into the new file.

When done, tell the user the file was created.

## Step 6: Add agent notes to AGENTS.md

This step only touches `AGENTS.md`. Do not edit any other file.

If the user gave no agent notes in Step 1, skip this step.

Otherwise, append the notes to the end of `AGENTS.md`:

- Add them under a new heading: `## Project notes`
- Write them as a bullet list, using the user's wording.
- Do not change, reorder, or remove anything already in the file.

If `AGENTS.md` does not exist, do not create it. Skip this step.

## Step 7: Provide instructions to reset git history (manual)

Do not run any git commands. Do not delete anything. Show the user the message below exactly as written, then stop.

> One last step, which you should do yourself: reset the git history.
>
> This project still carries ApexKit's commit history. Deleting it is irreversible, so it is safer for you to run it than for an agent to, after checking you are in the project root.
>
> ```
> rm -rf .git
> git init
> git add .
> git commit -m "Initial commit"
> git remote add origin <your-repo-url>
> ```
>
> Replace `<your-repo-url>` with your own repository.
