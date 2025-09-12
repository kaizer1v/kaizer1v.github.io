---
title: Thoughts on Don Norman’s Early Report - The Trouble with Unix
publishDate: 10 Dec 2023
description: My thoughts on Don Norman's Unix report & designing an interface without a GUI
---


## Focus Areas & Key Takeaways

The core argument is that while the Unix command line is elegant in its underlying system design, its user interface is not. Norman points out several inconsistencies

* Syntax rules in the command language vary
* Function names often don’t align with their intended purpose
* Behaviors are hidden from the user, making the system’s model difficult to grasp

For example, when a user first opens the command line, they’re greeted with nothing but a blank screen. It assumes prior knowledge of what to do. Even typing help often overwhelms users with exhaustive listings rather than guiding them toward possibilities

Unix is undeniably powerful, but Norman argues that its **interface was neglected**, leaving users struggling to bridge the gap between capability and usability.


## Case in point: the `cat` command

One well-known inconsistency is with the `cat` command. Designed for concat*enating two files, its side effect—printing the contents of a single file—led users to adopt it as a file viewer (`cat <filename>`). While efficient from a systems perspective (no need to create a new command), this introduces confusion. The intention of the command doesn’t match its usage, raising the cognitive load for users.

This illustrates Norman’s broader point: Unix prioritizes optimal use of primitives over user comprehension, resulting in a steeper learning curve and a less friendly experience.


## Feedback (or the lack thereof)

Another critical flaw is the command line’s limited interactive feedback. Unlike a human conversation, it rarely acknowledges context or warns users about irreversible actions. For example

* Quitting an editor without saving may delete work, yet no warning appears
* Running destructive commands offers no safety net unless explicitly coded

These design decisions might benefit scripting and automation but often punish interactive users


## Aliases as a design hack

A partial solution emerged in the form of aliases, which allow users to customize command names and workflows to suit their mental models. While useful, this is essentially a workaround—shifting the burden of good design from system architects to the end user.

Norman’s Three Principles for System Design

## Norman emphasizes three timeless principles:

* **Be Consistent:** A coherent set of rules should be applied across all commands and contexts.

* **Provide an Explicit Model:** Users build mental models of systems. If none is provided, they’ll invent their own—often incorrectly.

* **Provide Mnemonic Aids:** Use familiar, memorable terms to help users retain commands more easily.

## Broader Reflections

Norman’s short paper feels less like a critique of software and more like an exploration of designing a language. Communicating with the command line is akin to conversing in a protocol, which in turn recalls the movie Arrival, where the structure of language itself becomes a tool for thought

And here’s a fascinating thought: with the rise of large language models like ChatGPT, the way we communicate with computers is shifting dramatically. Perhaps these systems can finally deliver the conversational feedback loops Unix lacked

## Links

- [🔗 How to design for the commandline (Youtube)](https://www.youtube.com/watch?v=zsjeZZVAk1E)
- [🔗 The paper (PDF file)](https://people.computing.clemson.edu/~jmarty/courses/LinuxStuff/NormanTheTroublewithUnix.ScanofDatamation1981.pdf)