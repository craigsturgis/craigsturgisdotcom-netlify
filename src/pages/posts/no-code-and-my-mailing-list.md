---
templateKey: post
title: No-code and My Mailing List
date: 2020-09-15T11:30:00.000Z
description: Thoughts on no-code tools and an example of how I use them for my mailing list
featuredpost: true
featuredimage: /img/screen-shot-2020-09-10-at-8.59.57-am.png
tags:
  - no-code
---
<div class="columns">
<div class="column is-9">

I’m a coder at heart. 

Writing code hasn’t been my primary job for years now, but I always come back to it for hobby and passion projects. At its best, coding feels like giving myself [super powers](https://xkcd.com/353/).

But, building things with code gets complex fast. 

New tools are released all the time to simplify the process of building software. Still, the net amount of complexity needed to build and maintain something meaningful keeps going up. 

In modern software development, the pace of updates to the underlying tools and frameworks is often really fast. It makes ongoing maintenance a lot of work even before you move on to making your product or project better. Pretty much all software ends up bogged down in mountains of technical debt for understandable reasons[^1].

Years back, I started getting interested in the concept of “[no-code](https://en.wikipedia.org/wiki/No-code_development_platform)” automation. It helped me accomplish small tasks quickly without the “[yak shaving](https://americanexpress.io/yak-shaving/)” I often get lost in for hours and hours on software projects.


</div>
<div class="column is-3">

![The c0dez](/img/screen-shot-2020-09-14-at-10.36.21-am.png)

</div>
</div>

[^1]: Mostly having nothing to do with pace of change of tools, but that’s another post.

Over time, I’ve learned how to do more and more complex things with these tools, with most of the setup and maintenance taken care of for me. The end result is customized to my needs in ways I couldn’t get products off the shelf to do, and costs next to nothing to run.

I believe no-code tools will empower huge chunks of people in a similar way that spreadsheets did from the 80s to today. 

It will reduce the need for many expensive niche products and custom software development projects.

This trend could free up so much time for developers to focus on the endless things that require their specialized talents.

Even though I can write "real" code from scratch, I’ve found that using no-code tools saves me tons of time on most things I work on. It's almost always the tool I pick up first if the point is to solve a problem without needing to optimize for performance or 100% precision.

So, what kinds of things can you do with no-code? I’ll share an example of how I built my site’s customized [mailing list](https://craigsturgis.typeform.com/to/FWPtSS) for free with *almost*[^2] no code.

[^2]: I could probably make it work across the board with no actual code. But, because I’m a coder at heart my website is [too complex](/posts/great-gatsby-js/) to make it easy to completely use no-code tools for this particular case.

##My Customized (Almost) No-code (Free) Mailing List

This is probably a bad example for what you should use no-code tools to build. The internet is bursting with free options for small mailing lists that do the job well. But, I think this gives a good window into the types of things that are possible.

###What I wanted out of my mailing list

When I decided to set up a mailing list for this site, I thought through the main things I wanted:

I wanted a very cheap or free option to manage a small mailing list that kept people’s information private. 

I also wanted to make it easier to send customized messages to people on the list when I wanted to.

I also wanted a hobby project. 😀

###The List Itself

If you want a mailing list, you’ll need a reliable place to store it. Something as simple as google sheets will work, but I am a huge fan of [Airtable](https://airtable.com/invite/r/urHGIHqj). For anything that *might* need something that’s more like a database than a spreadsheet, give it a look. I’m not ruling out doing more complex things in the future with the mailing list, so it’s a good fit.

I created an Airtable base and got to work on adding some fields. I included one for the SHA-256 [encrypted hash](https://brilliant.org/wiki/secure-hashing-algorithms/) of emails on the list to use for everything except actually sending email. I also added one for a unique unsubscribe link using that hash.

<div class="columns">
<div class="column is-1">
</div>
<div class="column is-9">

![Airtable Contacts Table](/img/screen-shot-2020-09-14-at-9.10.08-am.png)

</div>
</div>

I ended up with something pretty straightforward but that won’t limit me if I want to do more with it in the future.

###Signing up

There are multiple ways built into my website’s framework to submit form responses, but none with the fit and finish of [Typeform](https://www.typeform.com). Typeform has a free option, and I’m happy to give them exposure in exchange, it’s a good product.

Typeform doesn’t allow for integrating with Airtable on their free plan. Even if it did, I wanted the extra step where I generate an encrypted hash of the email address. But, they do support sending data via “[webhook](https://zapier.com/blog/what-are-webhooks/)”. 

A webhook is a way to send and receive bundles of data between different systems when a specific event happens, like a form submission. If you’ve ever heard of web APIs, this is a simple version of those.

###Code, But No-code

Enter [Integromat](https://www.integromat.com/?pc=craigsturgis), my personal favorite no-code Swiss Army knife. Integromat is more complex than [Zapier](https://zapier.com) and the like, but in my experience it’s way more capable.

It helps if you’ve got some basic understanding of how programming works to use it. But, you don’t need to be a professional software engineer or even anything close to it  to follow its logical flows. If you've understood any "intro to programming" material that might even be overkill.

On to how it works. 

When someone opts in, Typeform sends their response to Integromat via a webhook.

<div class="columns">
<div class="column is-2">
</div>
<div class="column is-8">

![Opt In Scenario](/img/screen-shot-2020-09-10-at-8.59.57-am.png)

</div>
<div class="column is-2">
</div>
</div>


When that data is received it kicks off an Integromat “scenario” which:

* Calculates the SHA-256 encrypted hash of the submitted email.
* Checks to see if a record with that hashed value already exists in my contacts table.
* Sets opt in status to “true” for existing records.
* Creates a new record if it can’t find one and stores the email and encrypted hash.
* If it’s a new record, it triggers a welcome email via my craigsturgis.com G Suite account.



###”Or we will say stop. And then seriously, you must stop.”

I did have to write one small piece of actual code[^3] to support unsubscribes. I didn't want to have to ask anyone to type in their email to opt out of new messages[^4]. 

So, a simple javascript “[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)” call on my unsubscribe page sends the encrypted hash from the link that was clicked to another webhook. That kicks off the automation to opt someone out.

[^3]: You can see pretty much all of the code itself in the screenshot at the top of this post.
[^4]: I'm not a monster.


<div class="columns">
<div class="column is-2">
</div>
<div class="column is-8">

![Unsubscribe Scenario](/img/screen-shot-2020-09-14-at-9.21.33-am.png)

</div>
<div class="column is-2">
</div>
</div>


When the opt out webhook receives data, the opt out scenario: 

* Gets the domain of the email opting out
* Sets the “Opted In” flag to false for the record that matches the submitted hash
* Returns the email domain for feedback or a “not found” error message


I’m not big enough to have [CCPA](https://smarterhq.com/blog/ccpa-compliance) or the like apply to my tiny list, but I’m happy to delete anyone’s information completely who asks me to.

###Sending a message

When I want to send out a message to the list, I have another Integromat scenario that takes out a lot of the grunt work.

When I hit my bookmark for a new post, the new draft scenario:

* Finds all records with “Opted In” set to true
* Creates a draft in my gmail account for each one
* Inserts each record’s unique unsubscribe link in the draft


<div class="columns">
<div class="column is-2">
</div>
<div class="column is-8">

![Drafts aplenty](/img/screen-shot-2020-09-14-at-9.25.37-am.png)

</div>
<div class="column is-2">
</div>
</div>

My list is still small enough that I send a personal note out to pretty much everyone, so no sends are fully automated. That could change if enough people [sign up](https://craigsturgis.typeform.com/to/FWPtSS). 😉

I then do a lot of copy pasting that makes a good target for future improvements.

##Conclusion / TL;DR

No-code tools are great, and you can accomplish a surprising amount with them.

It can be the right choice in many situations even over writing “real” code.

Save the full coding production for projects that truly need the specialized skills of professional developers[^5]. Everyone involved will be happier.

[^5]: And make sure they have appropriate help from designers and / or product folks too as the situation requires.

If “learning to code” seems like too much, see what you can get done with no-code tools. If you can learn some of the concepts, you might find a super power. If you are good at spreadsheets, I bet you can become good at this. 

If you already know how to code, give it a shot. You'll find a useful set of tools to complement the heavy artillery you know how to use.

Build something and [email me](https://craigsturgis.typeform.com/to/Jv3Dgh) about it, I would love to know what you come up with.