---
templateKey: post
title: Riding the Rails
date: 2015-09-14T11:03:00.000Z
description: But backwards
featuredpost: false
featuredimage: /img/ruby_on_rails_logo.svg.png
tags:
  - technology
  - learning
---
Recently I've been getting the opportunity to work with / help out some software companies that base their tech stack on rails. Now, languages and frameworks are all just tools, and one doesn't necessarily have to be an expert in the tools to be able to make a material contribution to shipping a product.

But, in order to truly be helpful, one should probably be able to "[swing a hammer][3]" and have a good grasp on the mechanics and most of all the philosophy and approach to leveraging the tools.

[3]: https://media.giphy.com/media/zPTyIsZLKfRmg/giphy.gif

##Wait, you don't know rails?
Sadly, no. I read the pickaxe Ruby book in 2005 right after I graduated from college, but that was around the time got a job for a company that did all its development in .NET, and during that time of my life the primary tool I was interested in spending my personal time mastering was the guitar. So, what software tool skills I developed remained mostly in that sphere until much later.

However, Rails was deservedly the poster child for the growing consensus around how data backed web applications should be built - the smash hit that launched a thousand frameworks. Frameworks I ended up learning in my previous life as a .NET developer and then as I became more and more a Javascript expert on both the client and server side, and informed choices in the tools I was using to structure my node/express and client side MVC code.

##All aboard
So, while the concepts at play are very much an old, familiar hat, this particular set of tools I've only ever admired from afar, and my astigmatism doesn't help. Time to get up close and personal.

At first, I thought maybe the quickest way for an experienced developer to get up to speed on the philosophy and approach of rails was to watch a video course. I have a pluralsight trial and a lynda.com subscription, so I went to both of those and started to dive in.

While the intro videos gave me some of the philosophy, the material was targeted way, way below my web development experience level. I needed something I could move through more quickly.

##Getting Started
After some more googling around, and deciding I didn't want a full book, I went full bore into the official [Getting Started With Rails][1] guide. Overall, it was a good intro to the framework, and provided a very decent overview of the simple MVC mechanics and how things are laid out. I was able to connect a lot of the dots and see the lineage of a lot of other things I'm familiar with from .NET MVC, express, Angular, and the like, and like a good student I [completed the exercises][2].

[1]: http://guides.rubyonrails.org/getting_started.html
[2]: https://github.com/craigsturgis/rails-getting-started-blog/commits/master

##What's Missing / What's Next

The problem I am running into while I look into the best resources to help me get up to speed effectively is that a lot of guides / tutorials I run into seem to be targeted towards a web development world that I don't live in anymore.

The server side aspects of web development for me now are mostly about exposing a set of JSON based apis for client applications to consume, whether they are Javascript based web frameworks or native mobile / client apps. Good old static pages with some forms and javascript for flavor still have their place, but that tent is rapidly shrinking.

Javascript, whether you love it or loathe it[^1], is where most of the action is in terms of providing the surface area for users to interact with web apps. Really what I need is the ability to get up to speed on using rails to most effectively provide a set of APIs - CRUD is great, but based on my recent experience sometimes more tailored verbs are called for on API routes.

[^1]: I fall a lot more on the love side of it now that I use it mostly as the functional language it is and will even more when I can use ES6/2015 everywhere, and that day is pretty much here thanks to Babel and the like.

I'd love to find resources that help me get up to speed on the API focused approach so I can focus whatever other software tool based learning I do towards moving data around on the back end in the right way before it gets turned into JSON, and towards tools and conventions that help to build better client side applications both on the web[^2] and natively[^3].

[^2]: I've enjoyed my dive into Angular, but React really speaks to me and I'd like to explore it more, not just because it's the new hotness but the parts of Angular that chafe a bit seem to be addressed by React/Flux. We'll see
[^3]: Dabbling in native development has been both invigorating and frustrating. But, I'm most interested in building great user experiences, and being close to the metal is a great way to be sure that no limitations will pop up to degrade that experience.

I do think ActiveRecord is something I should dive into and understand fully, and I absolutely need to re-familiarize myself with the details and patterns of ruby the language, and especially understand how to do concurrency well in a rails context.

##Hjälp!

If you're reading this somewhat recently after it's posted and you are a ruby / rails expert, please do point me to the resources you think would be the most helpful for me at this stage. I'm in sponge mode but want to get the most bang for my time spent. Email away to craig @ this domain or tweeter me at @craigsturgis. I'll owe you a coffee!
