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

## Step 1: Ask questions

Ask the questions below one at a time, in order. For each one:

- Send only that that question, as plain text.
- Stop and wait for the answer before asking the next.
- Do not mention the remaining questions

Questions:

1. **Name**: Your project name ? 
2. **Description**: One sentence about your project.
3. **Author**: Your name ? 
4. **Audience**: Who is this project for ?
5. **Goal**: What do you want to build and/or achieve ? Ideally 2-5 lines but feel free to say more if you feel like it.

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

- Ask: "Ready to apply these changes?"
- Wait for a clear yes before continuing.

If you cannot edit files:

- Tell the user: "I need a mode that can edit files. Please switch modes, then reply 'go' when ready."
- Wait for their reply, then check again. If you still cannot edit, repeat the request.

Do not edit any file during this step. 









