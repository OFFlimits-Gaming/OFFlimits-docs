import{_ as h,r as o,o as m,c as p,a,b as e,d as s,w as t,t as c,e as d}from"./app-dc791501.js";const f={},_=a("h1",{id:"results",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#results","aria-hidden":"true"},"#"),e(" Results")],-1),b={href:"https://discord.com/oauth2/authorize?client_id=728332591790293044&scope=bot+applications.commands&permissions=268445752&client_id=728332591790293044",target:"_blank",rel:"noopener noreferrer"},g=d('<h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2><p>Results is a slash command that is used to calculate games results and sort teams according to a specific points system that can be customized <a href="/guide/points-system">setpoints</a>.</p><p>Later after using the command, the outcome can be used to generate beautiful results images <a href="/guide/board">board</a>.</p><p>Results command can be used in any channel or thread that has the word <code>results</code> in its name, and can be used in multiple channels to calculate different results.</p><h2 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h2><p>Before using the command you have to setup OFFlimits bot in your server, and to do that you need to use the command <a href="/guide/setup">setup</a>, which will create 2 channels:</p>',6),w=d(`<p>If you already have these channels you can skip <a href="/guide/setup">setup</a>.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Lets say we have the results of 2 games for <code>Team One</code>. <strong>Input</strong></p><div class="language-txt" data-ext="txt"><pre class="language-txt"><code>10th place                     1st place
Player A      3 kills          Player A      5 kills
Player B      1 kills          Player B      2 kills
Player C      0 kills          Player C      4 kills
Player D      1 kills          Player D      1 kills
</code></pre></div><p>For entering results data we use the channel <code>#results-bot</code>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the team name has numbers in it or the team name is a number, write it within <code>[ ]</code> brackets, Ex: <code>[Team 99]</code></p></div><ul><li>In our example case the name is Team One</li></ul><p>Now we array points after name in the following order:</p><p><code>Team Name [rank 1] [kills 1] [rank 2] [kills 2] and so on to infinity.</code></p>`,9),x=a("h2",{id:"sending-the-command",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#sending-the-command","aria-hidden":"true"},"#"),e(" Sending the command")],-1),y=a("p",null,[e("After writing down all teams we send the command "),a("code",null,"/results calculate"),e(" in the channel.")],-1),k=a("h2",{id:"outcome",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#outcome","aria-hidden":"true"},"#"),e(" Outcome")],-1),T=a("p",null,[e("After a few seconds the bot will send a leaderboard table in "),a("code",null,"#results-bot"),e(" channel.")],-1),D=a("div",{class:"language-txt","data-ext":"txt"},[a("pre",{class:"language-txt"},[a("code",null,`           RESULTS LEADERBOARD
  #      name     total   wins   KP   PP

1.        Team-One    33    1     17   16
2.        Team-Two    33    1     17   16

`)])],-1);function v(P,O){const u=o("ExternalLinkIcon"),r=o("DiscordInteraction"),i=o("DiscordMention"),n=o("DiscordMessage"),l=o("DiscordMarkdown");return m(),p("div",null,[_,a("p",null,[e("This page demonstrates how to use "),a("a",b,[e("OFFlimits bot"),s(u)]),e(" to calculate results.")]),g,s(n,{bot:!0,profile:"bot"},{interactions:t(()=>[s(r,{profile:"test",command:!0},{default:t(()=>[e("setup")]),_:1})]),default:t(()=>[e(" ✅ | Created "),s(i,{type:"channel"},{default:t(()=>[e("results-bot")]),_:1})]),_:1}),s(n,{bot:!0,profile:"bot"},{default:t(()=>[e(" ✅ | Created "),s(i,{type:"channel"},{default:t(()=>[e("operations")]),_:1})]),_:1}),w,s(n,{profile:"test"},{default:t(()=>[s(l,null,{default:t(()=>[e(" Team-One 10 5 1 12 "+c(`
`)+" Team-Two 10 5 1 12 ")]),_:1})]),_:1}),x,y,s(n,{profile:"test"},{default:t(()=>[s(l,null,{default:t(()=>[e(" Team-One 10 5 1 12 "+c(`
`)+" Team-Two 10 5 1 12 ")]),_:1})]),_:1}),s(n,{bot:!0,profile:"bot"},{interactions:t(()=>[s(r,{profile:"test",ephemeral:!0,command:!0},{default:t(()=>[e("results")]),_:1})]),default:t(()=>[e(" OFFlimits is thinking... ")]),_:1}),k,T,s(n,{bot:!0,profile:"bot"},{interactions:t(()=>[s(r,{profile:"test",ephemeral:!0,command:!0},{default:t(()=>[e("results")]),_:1})]),default:t(()=>[D]),_:1})])}const A=h(f,[["render",v],["__file","results.html.vue"]]);export{A as default};
