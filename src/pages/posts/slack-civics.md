---
templateKey: post
title: Slack Civics
date: 2016-03-28T11:33:00.000Z
description: Ways to Group Chat Without Sweating Too Much
featuredpost: false
featuredimage: /img/discurso_funebre_pericles.png
tags:
  - tech in operations
  - culture
---
Recently as Slack has continued its rise as a primary tool for people to communicate, there's been a bit of a backlash against some of the behaviors that result.

One person sent their [dear John letter][1], 37Signals' Jason Fried shared his [strong opinion][2] on the subject, and Ars Technica also released a more [comprehensive piece][3] on Slack centered workplaces from a more observational point of view.

All 3 posts are well done and worth reading, and all have their own great points to make, especially around design and the root of how tools affect behavior. But, I think for a lot of groups there's a way to cultivate a healthier way to leverage the tool and get the big advantages without as much of the stress and the strain described in those posts.

[1]: https://medium.com/better-people/slack-i-m-breaking-up-with-you-54600ace03ea#.5hwhugk6d
[2]: https://m.signalvnoise.com/is-group-chat-making-you-sweat-744659addf7d#.j18h4uytr
[3]: http://arstechnica.com/information-technology/2016/03/what-slack-is-doing-to-our-offices-and-our-minds/

##Gotta make adjustments

Having recently shifted from being one of the drivers of a Slack centered, ["work as if remote"][4] culture to one that is much more face to face interaction and meeting focused, with some email, wiki, and chat thrown in, I've had to do my fair share of adjustment. However, this is also a group that does leverage Slack as its group chat tool, just not nearly as widely or deeply as I'm accustomed to.

[4]: http://www.panozzaj.com/blog/2015/10/25/work-as-if-remote/

Any community of 300+ inside of a broader organization of 1500+ is going to behave differently from a community of 10 regardless of their tools, but having come from a place where I think group chat worked really well [for the most part][5] , I have taken to stumping for something that's more like a set of civic duties to be aware of that make for a better Slack [society][6]. 

_(In the interest of brevity, I write Slack when almost all of these things also apply to other similar group chat tools like HipChat, Flowdock, IRC, etc.)_

[5]: http://craigsturgis.com/2015/08/17/slack-is-the-future-of-team-communication/
[6]: https://www.youtube.com/watch?v=xhe3RlzgTiQ

## Everybody needs a vision

In a perfect world, I look at my Slack app after a good bit of focusing on other work and see all the conversations relevant to me, I know the correct place to go to start any conversation, and I know which ones are urgent and not urgent. But, none of us live in a perfect world.

I firmly believe that like most things, there is no one **right** way to group chat or communicate within a team, but I thought I'd share the key disciplines I've seen work well:

## Information in the open

The primary advantage that Slack has over email and one off conversations is that it allows for more information to be shared in an open, recorded context. That way, not everyone has to be in a status meeting or copied on every email thread to know what's happening- and conversations and history are located in an easily searchable place. However, this requires that people actually get into the habit of sharing the information in the first place.

Some examples that are helpful to share are links to / summaries of meeting agendas and decisions, outlines of one off conversations, relevant reference material and supporting documents, etc. If those things remain in email or private chats or vanish into the air in a meeting room, information is often lost or shifts as it is recollected in a game of idea telephone.

## Commentary Track, Not the Movie

If I'm curious about a topic that is not core to my normal frame of reference, I should be able to dip into (and out of) channels to get the conversation and follow links to the appropriate supporting material. I should not need to stay in every channel and read every message or do a search through the chat history to cobble together a good sense of where something is.

Other reference systems such as Trello, JIRA, Basecamp, and the like are way better for keeping track of individual bits of work and their current status and context. However, when updates are syndicated to Slack it can help people get a sense of that moment in time, and give more depth to the meta-conversation that may not necessarily apply directly to those specific bits of work. It can also help the non regulars figure out what part of a reference system is actually relevant for a topic. But participants also need to be guided to share appropriate information in the underlying tool rather than just in Slack too.

## Tuned Integrations

In a related sense, easy integration with outside sources and services is a huge benefit to using Slack, and making sure it's sending the right amount of information is key. If there's a firehose of links in the channel, it's hard to carry on a conversation without pieces of it getting lost. Tuning the integration to give the broader strokes and not every status change or comment can go a long way, and could even need to be maintained over time. But it is worth it.

## Russian Nesting (Public) Channels

Depending on the number of people in your group, you probably want to have appropriate sub-groupings for people to sort themselves into. Think about the example from your biology textbook of species classification (or if you prefer, your favorite object oriented language inheritance example).

If I'm a duck and I'm in the Slack for the "all animals" organization, I probably belong to some group of appropriate channels for conversations at the level of #vertebrates, #birds, #ducks, and potentially other ways to slice things that don't fall into a strict hierarchy like #pond-swimmers, #gimme-bread, #lovable-loser-youth-hockey-team, etc. This way it becomes easier to tell where the right people to talk to at the right level of specificity are.

## Notification and Channel Etiquette

Much like email, the first big step to a more sustainable personal Slack experience is tuning the amount of notifications[^1] you personally get so you're not constantly bombarded and distracted. However, many times you still need to figure out when something actually needs attention sooner rather than later. That requires help from everyone involved.

[^1]: (pop pop pop sound)

When people are guided only to use the appropriate version of @here / other group messages when that is warranted, only @ mention people when something needs a specific person's attention, and they can trust that the non urgent things will get a good response in a reasonable amount of time, that is a culture that is more helpful and less needlessly distracted. Finding this balance with your group is the crucial counterweight to the "expectactions" problem that Hulick and Fried justifiably point out.

## Cross Talk

One thing Slack is decidedly **not** good at is when people are trying to discuss more than one topic simultaneously in a channel, which can create a confusing soup of multiple topics. There's more than one way to mitigate this problem, but even having everybody be aware that this makes things difficult to follow is the first step.

Creating a post that people can comment on so discussion is collected on a single item, or my favorite recent strategy- breaking out a new, short-lived channel that can be archived when the topic is done can be a huge help in maintaining focused conversations while keeping useful information in a public, searchable place. It acts a bit like a code branch for the topic at hand.

## Community Guidance

The thing about communicating this way is that it is a relatively new experience for a lot of people, and they really only get good at it by being exposed to its use as something beyond another place to exchange words in the same way.

Otherwise, they may stick to the muscle memory of meetings and emails or using it like any other IM style tool. Slack does a good job of nudging people, but it still requires a helpful civic culture to help patiently guide people into the right habits and give directions to the right places, maybe even with a deliberate onboarding process to help, just like introducing someone to a new physical office culture.

## Oh, and robots
Some of the most fun can be had by leveraging slackbot, custom webhooks, and even [hubot][7] to add random fun touches, do all the janitorial work like archiving inactive channels, and to pipe in custom information specific to your codebase and operations. It can also be a good steam valve for developers and other people who write a bit of code to create something to share which might have culture value if not direct work value.

[7]: https://hubot.github.com/

## Phew

Sounds like a lot of work huh? I'd argue that so is maintaining any good society and culture, whatever methods are used to communicate.

I think it is fair to call for better design that leads to more falling into the [pit of success][8], but regardless of tool design, culture eats process that doesn't match it, and entropy will always win in the end. But, if you and your cronies are deliberate, thoughtful, and together maintain a self examining environment then it is possible, and even probable that you can collaborate better with group chat as a communication centerpiece vs. without it.

[8]: http://blog.codinghorror.com/falling-into-the-pit-of-success/
